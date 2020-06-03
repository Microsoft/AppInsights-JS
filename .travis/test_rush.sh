set -e
set NO_UPDATE_NOTIFIER=1
# echo 'Checking for missing change logs...' && echo -en 'travis_fold:start:change\\r'
# git fetch origin master:refs/remotes/origin/master -a
# node common/scripts/install-run-rush.js change -v

echo -en 'travis_fold:end:change\\r'
echo 'Checking for inconsistent dependency versions' && echo -en 'travis_fold:start:check\\r'
node common/scripts/install-run-rush.js check

echo -en 'travis_fold:end:check\\r'
echo 'Installing...' && echo -en 'travis_fold:start:install\\r'
rm -rf common/temp/npm-local
node common/scripts/install-run-rush.js install

echo -en 'travis_fold:end:install\\r'
echo 'Building...' && echo -en 'travis_fold:start:build\\r'
node common/scripts/install-run-rush.js rebuild --verbose

echo -en 'travis_fold:end:build\\r'
echo 'Running test...' && echo -en 'travis_fold:start:tests\\r'
node common/scripts/install-run-rush.js test --verbose

echo -en 'travis_fold:end:tests\\r'
echo 'Running tslint...' && echo -en 'travis_fold:start:lint\\r'
node common/scripts/install-run-rush.js lint --verbose
echo -en 'travis_fold:end:lint\\r'
