import {
    IUnloadHook, createUniqueNamespace, eventOff, eventOn, getDocument, getNavigator, getWindow, isNullOrUndefined, isUndefined,
    mergeEvtNamespace
} from "@microsoft/applicationinsights-core-js";

/**
 * this is the callback that will be called when the network status changes
 * @param onlineState this is the current network running state
 */
export type OfflineCallback = (onlineState: IOfflineState) => void;

/**
 * This is the enum for the different network states current ai is experiencing
 */
export const enum eOfflineValue {
    Unknown = 0,
    Online = 1,
    Offline = 2
}
/**
 * This is the interface for the Offline state
 * runtime state is retrieved from the browser state
 * user state is set by the user
*/
export interface IOfflineState {
    readonly isOnline: boolean;
    readonly rState: eOfflineValue; // runtime state
    readonly uState: eOfflineValue; // user state
}

export interface IOfflineListener {
    isOnline: () => boolean;
    isListening: () => boolean;
    unload: () => void;
    addListener(callback: OfflineCallback): IUnloadHook;
    userSetOnlineState: (uState: eOfflineValue) => void;
    namespace?: string;
}

function _disableEvents(target: any, evtNamespace: string | string[]) {
    eventOff(target, null, null, evtNamespace);
}

/**
 * Create a new OfflineListener instance to monitor browser online / offline events
 * @param parentEvtNamespace - The parent event namespace to append to any specific events for this instance
 */
export function createOfflineListener(parentEvtNamespace?: string | string[]): IOfflineListener {
    let _document = getDocument();
    var _navigator = getNavigator();        // Gets the window.navigator or workerNavigator depending on the global
    let _isListening: boolean = false;
    let listenerList: OfflineCallback[] = [];

    // Set the initial state
    let _onlineStatus: boolean = _isNavOnline();
    let rState: eOfflineValue = eOfflineValue.Online;
    let uState: eOfflineValue = eOfflineValue.Offline;

    let _evtNamespace = mergeEvtNamespace(createUniqueNamespace("OfflineListener"), parentEvtNamespace);

    try {
        if (_enableEvents(getWindow())) {
            _isListening = true;
        }
        
        if (_document) {
            // Also attach to the document.body or document
            let target:any = _document.body || _document;

            if (target.ononline) {
                if (_enableEvents(target)) {
                    _isListening = true;
                }
            }
        }

        if (_isListening) {
            // We are listening to events so lets set the current status rather than assuming we are online #1538
            if (_navigator && !isNullOrUndefined(_navigator.onLine)) { // navigator.onLine is undefined in react-native
                _onlineStatus = _navigator.onLine;
            }
        }
    } catch (e) {
        // this makes react-native less angry
        _isListening = false;
    }

    function _enableEvents(target: any): boolean {
        let enabled = false;
        if (target) {
            enabled = eventOn(target, "online", _setOnline, _evtNamespace);
            if (enabled) {
                eventOn(target, "offline", _setOffline, _evtNamespace);
            }
        }
        return enabled;
    }

    function _isOnline(){
        return _onlineStatus;
    }

    function currentState(){
        if (uState === eOfflineValue.Offline || rState === eOfflineValue.Offline){
            return false;
        }
        return true; // if both unknown, then we assume the network is good
    }

    function listnerNoticeCheck(){
        // we were offline and are now online or we were online and now offline
        if (_isOnline() !== currentState()) {
            _onlineStatus = currentState(); // use the resolved state to update
            // send all the callbacks with the current state
            listenerList.forEach((callback: OfflineCallback) => {
                let offlineState: IOfflineState = {
                    isOnline: _onlineStatus,
                    rState: rState,
                    uState: uState
                };
                callback(offlineState);
            });
        }
    }

    function userSetOnlineState(uState: eOfflineValue){
        this.uState = uState;
        listnerNoticeCheck();
    }

    function _setOnline() {
        rState = eOfflineValue.Online;
        listnerNoticeCheck();
    }

    function _setOffline() {
        rState = eOfflineValue.Offline;
        listnerNoticeCheck();
    }

    function _isNavOnline(): boolean {
        let result = true;
        if (_isListening) {
            result = _onlineStatus
        } else if (_navigator && !isNullOrUndefined(_navigator.onLine)) { // navigator.onLine is undefined in react-native
            result = _navigator.onLine;
        }
        return result;
    }

    function _unload() {
        let win = getWindow();
        if (win && _isListening) {
            _disableEvents(win, _evtNamespace);

            if (_document) {
                // Also attach to the document.body or document
                let target:any = _document.body || _document;
                if (!isUndefined(target.ononline)) {
                    _disableEvents(target, _evtNamespace);
                }
            }
            _isListening = false;
        }
    }

    function addListener(callback: OfflineCallback) {
        listenerList.push(callback);
        // Define rm as an instance of IUnloadHook
        return {
            rm: () => {
                let index = listenerList.indexOf(callback);
                if (index > -1){
                    return listenerList.splice(index, 1);
                } else {
                    return;
                }
            }
        };
    }

    return {
        isOnline: _isOnline,
        isListening: () => _isListening,
        unload: _unload,
        addListener: addListener,
        userSetOnlineState: userSetOnlineState
    };
}
