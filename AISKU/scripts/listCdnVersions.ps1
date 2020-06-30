param (
    [string] $container = $null,                        # Identify the container that you want to check blank == all
    [string] $cdnStorePath = "daprodcdn",               # Identifies the target Azure Storage account (by name)
    [string] $sasToken = $null,                         # The SAS Token to use rather than using or attempting to login
    [string] $logPath = $null,                          # The location where logs should be written
    [switch] $showFiles = $false,                       # Show the individual files with details as well
    [switch] $testOnly = $false                         # Uploads to a "tst" test container on the storage account
)

$metaSdkVer = "aijssdkver"
$metaSdkSrc = "aijssdksrc"

$global:hasErrors = $false
$global:sasToken = $sasToken
$global:resourceGroup = $null
$global:storeName = $null                              # The endpoint needs to the base name of the endpoint, not the full URL (eg. “my-cdn” rather than “my-cdn.azureedge.net”)
$global:subscriptionId = $null

Function Log-Params 
{
    Log "Container : $container"
    Log "Store Path: $cdnStorePath"
    Log "Log Path  : $logDir"
    Log "Show Files: $showFiles"
    Log "Test Mode : $testOnly"
    
    if ([string]::IsNullOrWhiteSpace($global:sasToken) -eq $true) {
        Log "Mode      : Manual"
    } else {
        Log "Mode      : Sas-Token"
    }
}

##  Function: Get-TimeStamp
##  Purpose: Used to get the timestamp for logging
Function Get-TimeStamp
{
    return "[{0:MM/dd/yy} {0:HH:mm:ss}]" -f (Get-Date)
}

Function Write-LogDetail(
    [string] $value
) {
    Add-Content $logFile "$(Get-TimeStamp) $value"
}

##  Function: Log
##  Purpose: Used to log the output to both the Console and a log file
Function Log( 
    [string] $value
) {
    Write-Host "$(Get-TimeStamp) $value"
    Write-LogDetail $value
}

##  Function: Log-Warning
##  Purpose: Used to log the output to both the Console and a log file
Function Log-Warning ( 
    [string] $value
) {
    Write-Host "$(Get-TimeStamp) [WRN] $value" -ForegroundColor Yellow -BackgroundColor DarkBlue
    Write-LogDetail "[WRN] $value"
}

##  Function: Log-Warning
##  Purpose: Used to log the output to both the Console and a log file
Function Log-Failure ( 
    [string] $value,
    [boolean] $isTerminal = $true
) {
    if ($isTerminal -eq $true) {
        Write-Host "$(Get-TimeStamp) [ERR] $value" -ForegroundColor Yellow -BackgroundColor DarkRed
        Write-LogDetail "[ERR] $value"
        $global:hasErrors = $true
    } else {
        Write-Host "$(Get-TimeStamp) [INF] $value" -ForegroundColor Red
        Write-LogDetail "[INF] $value"
    }
}

Function Log-Exception(
    [System.Management.Automation.ErrorRecord] $err,
    [boolean] $asError = $true
) {
    Log-Failure "Exception: $($err.Exception.Message)" $asError
    Log-Failure "Source   : $($err.Exception.Source)"  $asError
    Write-LogDetail "Full Exception: $($err.Exception)"
    Log-Failure $err.ScriptStackTrace  $asError
}

Function Log-Errors(
    [boolean] $asError = $true
) {
    foreach ($err in $Error) {
        Log-Exception $err $asError
    }
}

##  Function: InstallRequiredModules
##  Purpose: Checks and attempts to install the required AzureRM Modules
Function InstallRequiredModules ( 
    [int32] $retry = 1
) {
    if ($retry -le 0) {
        Log-Warning "--------------------------------------"
        Log-Warning "Failed to install the required Modules"
        Log-Warning "--------------------------------------"
        Log ""
        Log "Please install / run the following from an administrator powershell window"
        Log "Install-Module AzureRM"
        Log "Install-Module Az.Storage"
        Log ""
        Log "Additional Notes for Internal Application Insights Team"
        Log "Please review the 'Release to CDN Failures' Page on the teams documentation for further assistance"

        exit
    }

    $commandsExist = $true
    $c = Get-Command Login-AzureRMAccount -errorAction SilentlyContinue
    if ($null -eq $c) {
        $commandsExist = $false
    } else {
        Log "Importing Module $($c.Source) for Login-AzureRMAccount"
        Import-Module $c.Source
        $c = Get-Command Get-AzureRmStorageAccount -errorAction SilentlyContinue
        if ($null -eq $c) {
            $commandsExist = $false
        } else {
            Log "Importing Module $($c.Source) for Get-AzureRmStorageAccount"
            Import-Module $c.Source
        }
    }

    if ($commandsExist -eq $false) {
        # You will need to at least have the AzureRM module installed
        $m = Get-Module -ListAvailable -Name "AzureRM"
        if ($null -eq $m) {
            Log "The AzureRM module is not currently installed -- it needs to be"
            Log "Attempting to Install AzureRM Module"

            InstallRequiredModules $($retry-1)
        }
    }
}

Function IsGuid(
    [string] $value
) {
    $guid = New-Object 'System.Guid'
    return [System.Guid]::TryParse($value, [ref]$guid)
}

Function CheckLogin
{
    $loggedIn = $false
    $attempt = 0

    Log "Checking Logged in status."
    while ($loggedIn -eq $false) {
        $Error.Clear()

        if ($attempt -ge 5) {
            Log-Failure "Unable to login..."
            exit 100;
        }

        $loggedIn = $true
        Get-AzureRmStorageAccount -ErrorAction SilentlyContinue | Out-Null
        Log-Errors $false

        #Get-AzureRmSubscription -SubscriptionId $subscriptionId -ErrorAction SilentlyContinue
        foreach ($eacherror in $Error) {
            if ($eacherror.Exception.ToString() -like "* Login-AzureRmAccount*") {
                $loggedIn = $false

                Log "Logging in... Atempt #$($attempt + 1)"
                $Error.Clear()
                Login-AzureRMAccount -ErrorAction SilentlyContinue 
                Log-Errors $false
                break
            } elseif ($eacherror.Exception.ToString() -like "* Connect-AzureRmAccount*") {
                $loggedIn = $false

                Log "Connecting... Atempt #$($attempt + 1)"
                $Error.Clear()
                if ([string]::IsNullOrWhiteSpace($global:subscriptionId) -ne $true -and (IsGuid($global:subscriptionId) -eq $true)) {
                    Connect-AzureRmAccount -ErrorAction SilentlyContinue -Subscription $global:subscriptionId | Out-Null
                } else {
                    Connect-AzureRmAccount -ErrorAction SilentlyContinue | Out-Null
                }

                Log-Errors $false
                break
            } else {
                $loggedIn = $false
                Log-Warning "Unexpected failure $($eacherror.Exception)"
            }
        }

        $attempt ++
    }

    $Error.Clear()
}

Function ParseCdnStorePath
{
    if ([string]::IsNullOrWhiteSpace($cdnStorePath) -eq $true) {
        Log-Failure "Invalid Store Path ($cdnStorePath)"
        exit 10
    }

    $global:storeName = $cdnStorePath
    $parts = $cdnStorePath.split("::")
    if ($parts.Length -eq 3) {
        $global:subscriptionId = $parts[0]
        $global:resourceGroup = $parts[1]
        $global:storeName = $parts[2]
    } elseif ($parts.Length -eq 2) {
        $global:subscriptionId = $parts[0]
        $global:storeName = $parts[1]
    } elseif ($parts.Length -ne 1) {
        Log-Failure "Invalid Store Path ($cdnStorePath)"
        exit 11
    }

    if ([string]::IsNullOrWhiteSpace($global:storeName) -eq $true) {
        Log-Failure "Missing Storage name from Path ($cdnStorePath)"
        exit 12
    }

    Log "----------------------------------------------------------------------"
    if ([string]::IsNullOrWhiteSpace($global:subscriptionId) -ne $true) {
        Log "Subscription: $global:subscriptionId"
    }

    if ([string]::IsNullOrWhiteSpace($global:resourceGroup) -ne $true) {
        Log "Group       : $global:resourceGroup"
    }

    Log "StoreName   : $global:storeName"
    Log "----------------------------------------------------------------------"
}

Function GenerateUserSasToken
{
    CheckLogin | Out-Null

    Log "  Finding Subscriptions"
    $subs = Get-AzureRmSubscription | Where-Object State -eq "Enabled"
    if ($null -eq $subs -or $subs.Length -eq 0) {
        Log-Failure "  - No Active Subscriptions"
        exit 500;
    }

    # Limit to the defined subscription
    if ([string]::IsNullOrWhiteSpace($global:subscriptionId) -ne $true) {
        $subs = $subs | Where-Object Id -like $("*$global:subscriptionId*")
    }

    Log "  Finding Storage Account"
    $store = $null
    $accounts = $null
    foreach ($id in $subs) {
        Log "    Checking Subscription $($id.Id)"
        Select-AzureRmSubscription -SubscriptionId $id.Id | Out-Null
        $accounts = Get-AzureRmStorageAccount
        if ($null -ne $accounts -and $accounts.Length -ge 1) {
            # If a resource group has been supplied limit to just that group
            if ([string]::IsNullOrWhiteSpace($global:resourceGroup) -ne $true) {
                $accounts = $accounts | Where-Object ResourceGroupName -eq $global:resourceGroup
            }

            $accounts = $accounts | Where-Object StorageAccountName -eq $global:storeName

            if ($accounts.Length -gt 1) {
                Log-Failure "    - Too many [$($accounts.Length)] matching storage accounts located for $($cdnStorePath) please specify the resource group as a prefix for the store name parameter '[<Subscription>::[<ResourceGroup>::]]<StoreName>"
                exit 300;
            } elseif ($accounts.Length -eq 1 -and $null -eq $store) {
                Log "    - Found Candidate Subscription $($id.Id)"
                $global:subscriptionId = $id.Id
                $store = $accounts[0]
            } elseif ($accounts.Length -ne 0 -or $null -ne $store) {
                Log-Failure "    - More than 1 storage account was located for $($cdnStorePath) please specify the resource group as a prefix for the store name parameter '[<Subscription>::[<ResourceGroup>::]]<StoreName>"
                exit 300;
            } else {
                Log "    - No Matching Accounts"
            }
        } else {
            Log "    - No Storage Accounts"
        }
    }

    if ($null -eq $store) {
        Log-Failure "  Unable to access or locate a storage account $cdnStorePath"
        exit 300;
    }

    $global:storeName = $store.StorageAccountName
    $global:resourceGroup = $store.ResourceGroupName

    Log "Generating SAS Token for"
    if ([string]::IsNullOrWhiteSpace($global:subscriptionId) -ne $true) {
        Log "  Subscription: $global:subscriptionId"
    }

    if ([string]::IsNullOrWhiteSpace($global:resourceGroup) -ne $true) {
        Log "  Group       : $global:resourceGroup"
    }

    Log "  StoreName   : $global:storeName"    
    $storageContext = $store.context
    $sasToken = New-AzureStorageAccountSASToken -Context $storageContext -Service Blob -ResourceType Service,Container,Object -Permission lr  -Protocol HttpsOnly

    if ([string]::IsNullOrWhiteSpace($sasToken) -eq $true) {
        Log-Failure "  - Unable to access or locate a storage account $cdnStorePath"
        exit 301;
    }

    $global:sasToken = $sasToken
}

Function GetVersion(
    [string] $name
) {
    $regMatch = '^(.*\/)*([^\/\d]*\.)(\d+(\.\d+)*)(\.(?:js|min\.js)(?:\.map)?)$'
    $match = ($name | select-string $regMatch -AllMatches).matches

    if ($null -eq $match) {
        return $null
    }
    
    [hashtable]$return = @{}
    $return.path = $match.groups[1].value
    $return.prefix = $match.groups[2].value
    $return.ver = $match.groups[3].value
    $return.ext = $match.groups[4].value

    return $return
}

Function GetContainerContext(
    [string] $storagePath
) {
    # Don't try and publish anything if any errors have been logged
    if ($global:hasErrors -eq $true) {
        exit 2
    }

    while($storagePath.endsWith("/") -eq $true) {
        $storagePath = $storagePath.Substring(0, $storagePath.Length-1)
    }

    $blobPrefix = ""
    $storageContainer = ""

    $tokens = $storagePath.split("/", 2)
    if ($tokens.length -eq 0) {
        Log-Warning "Invalid storage path - $storagePath"
        exit
    }

    $storageContainer = $tokens[0]
    if ($tokens.Length -eq 2) {
        $blobPrefix = $tokens[1] + "/"
    }

    if ($testOnly -eq $true) {
        $blobPrefix = $storageContainer + "/" + $blobPrefix
        $storageContainer = "tst"
    }

    Log "Container  : $storageContainer Prefix: $blobPrefix"

    $azureContext = New-AzureStorageContext -StorageAccountName $global:storeName -Sastoken $global:sasToken -ErrorAction SilentlyContinue
    $azContainer = Get-AzureStorageContainer -Name $storageContainer -Context $azureContext -ErrorAction SilentlyContinue
    if ($null -eq $azContainer) {
        Log "Container [$storageContainer] does not exist"
        return
    }

    if ($global:hasErrors -eq $true) {
        exit 3
    }

    [hashtable]$return = @{}
    $return.azureContext = $azureContext
    $return.container = $azContainer
    $return.storageContainer = $storageContainer
    $return.blobPrefix = $blobPrefix

    return $return
}

Function GetVersionFiles(
    [system.collections.generic.dictionary[string, system.collections.generic.list[hashtable]]] $files,
    [string] $storagePath,
    [string] $filePrefix
) {

    $context = GetContainerContext $storagePath
    if ($null -eq $context) {
        return
    }

    $blobs = Get-AzureStorageBlob -Container $context.storageContainer -Context $context.azureContext -Prefix "$($context.blobPrefix)$filePrefix" -ErrorAction SilentlyContinue
    foreach ($blob in $blobs) {
        $version = GetVersion $blob.Name
        if ($null -ne $version -and [string]::IsNullOrWhiteSpace($version.ver) -ne $true) {
            $fileList = $null
            if ($files.ContainsKey($version.ver) -ne $true) {
                $fileList = New-Object 'system.collections.generic.list[hashtable]'
                $files.Add($version.ver, $fileList)
            } else {
                $fileList = $files[$version.ver]
            }

            $theBlob = [hashtable]@{}
            $theBlob.path = "$($context.storageContainer)/$($version.path)"
            $theBlob.blob = $blob
            $fileList.Add($theBlob)
        }
    }
}

Function ListVersions(
   [system.collections.generic.dictionary[string, system.collections.generic.list[hashtable]]] $files
) {

    $sortedKeys = $files.Keys | Sort-Object
    foreach ($key in $sortedKeys) {
        $fileList = $files[$key]
        $paths = [hashtable]@{}
        if ($showFiles -ne $true) {
            $pathList = ""
            foreach ($theBlob in $fileList) {
                $thePath = $theBlob.path
                if ($paths.ContainsKey($thePath) -ne $true) {
                    $paths[$thePath]  = $true
                    if ($theBlob.blob.ICloudBlob.Metadata.ContainsKey($metaSdkSrc)) {
                        $value = "{0,-20}" -f $theBlob.blob.ICloudBlob.Metadata[$metaSdkSrc]
                        $pathList = "$pathList$value  "
                    } else {
                        $value = "{0,-20}" -f $thePath
                        $pathList = "$pathList$value  "
                    }
                }
            }

            Log $("v{0,-8} ({1,2})  -  {2}" -f $key,$($fileList.Count),$pathList.Trim())
        } else {
            Log $("v{0,-8} ({1,2})" -f $key,$($fileList.Count))
            foreach ($theBlob in $fileList) {
                $blob = $theBlob.blob
                $blob.ICloudBlob.FetchAttributes()
                $sdkVersion = $blob.ICloudBlob.Metadata[$metaSdkVer]
                if ([string]::IsNullOrWhiteSpace($sdkVersion) -ne $true) {
                    $sdkVersion = "v$sdkVersion"
                } else {
                    $sdkVersion = "---"
                }
    
                $metaTags = ""
                foreach ($dataKey in $blob.ICloudBlob.Metadata.Keys) {
                    if ($dataKey -ne $metaSdkVer) {
                        $metaTags = "$metaTags$dataKey=$($blob.ICloudBlob.Metadata[$dataKey]); "
                    }
                }
    
                $cacheControl = $blob.ICloudBlob.Properties.CacheControl
                $cacheControl = $cacheControl -replace "public","pub"
                $cacheControl = $cacheControl -replace "max-age=31536000","1yr"
                $cacheControl = $cacheControl -replace "max-age=1800","30m"
                $cacheControl = $cacheControl -replace "max-age=900","15m"
                $cacheControl = $cacheControl -replace "max-age=300"," 5m"
                $cacheControl = $cacheControl -replace "immutable","im"
                $cacheControl = $cacheControl -replace ", "," "
    
                Log $("  - {0,-40} {3,7}  {1,6:N1} Kb  {2:yyyy-MM-dd HH:mm:ss}  {4,10}  {5}" -f $($blob.ICloudBlob.Container.Name + "/" + $blob.Name),($blob.Length/1kb),$blob.LastModified,$sdkVersion,$cacheControl,$metaTags)
            }
        }
    }
}

Function Validate-Params
{
    # Validate parameters
    if ([string]::IsNullOrWhiteSpace($container) -ne $true -and "beta","next","public" -NotContains $container) {
        Log-Failure "[$($container)] is not a valid value, must be beta, next or public"
    }
}

$Error.Clear()

#-----------------------------------------------------------------------------
# Start of Script
#-----------------------------------------------------------------------------
$logDir = $logPath
if ([string]::IsNullOrWhiteSpace($logPath) -eq $true) {
    $logDir = join-path ${env:SystemDrive} "\Logs"
}

if (!(Test-Path -Path $logDir)) {
    New-Item -ItemType directory -Path $logDir
}

$fileTimeStamp = ((get-date).ToUniversalTime()).ToString("yyyyMMddThhmmss")
$logFile = "$logDir\listCdnVersionsLog_$fileTimeStamp.txt"

Log-Params
Validate-Params

# Don't try and list anything if any errors have been logged
if ($global:hasErrors -eq $true) {
    exit 2
}

# You will need to at least have the AzureRM module installed
InstallRequiredModules
ParseCdnStorePath

if ([string]::IsNullOrWhiteSpace($global:sasToken) -eq $true) {
    Log "**********************************************************************"
    Log "Generating SAS token for user"
    Log "**********************************************************************"
    GenerateUserSasToken
}

Log "======================================================================"
# List the files for each container
$files = New-Object 'system.collections.generic.dictionary[string, system.collections.generic.list[hashtable]]'

# Get the beta files
if ([string]::IsNullOrWhiteSpace($container) -eq $true -or $container -eq "beta") {
    GetVersionFiles $files "beta" "ai."
}

# Get the next files
if ([string]::IsNullOrWhiteSpace($container) -eq $true -or $container -eq "next") {
    GetVersionFiles $files "next" "ai."
}

# Get the public files (scripts/b)
if ([string]::IsNullOrWhiteSpace($container) -eq $true -or $container -eq "public") {
    GetVersionFiles $files "scripts/b" "ai."
}

ListVersions $files
Log "======================================================================"
