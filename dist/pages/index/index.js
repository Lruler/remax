require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@remax/wechat/esm/api/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/api/index.js ***!
  \*****************************************************/
/*! exports provided: canIUse, base64ToArrayBuffer, arrayBufferToBase64, getSystemInfoSync, getSystemInfo, getUpdateManager, getLaunchOptionsSync, onPageNotFound, onError, onAudioInterruptionEnd, onAppShow, onAppHide, offPageNotFound, offError, offAudioInterruptionEnd, offAudioInterruptionBegin, offAppShow, offAppHide, setEnableDebug, getLogManager, switchTab, reLaunch, redirectTo, navigateTo, navigateBack, showToast, showModal, showLoading, showActionSheet, hideToast, hideLoading, showNavigationBarLoading, setNavigationBarTitle, setNavigationBarColor, hideNavigationBarLoading, setBackgroundTextStyle, setBackgroundColor, showTabBarRedDot, showTabBar, setTabBarStyle, setTabBarItem, setTabBarBadge, removeTabBarBadge, hideTabBarRedDot, hideTabBar, loadFontFace, stopPullDownRefresh, startPullDownRefresh, pageScrollTo, createAnimation, setTopBarText, nextTick, getMenuButtonBoundingClientRect, onWindowResize, offWindowResize, onKeyboardHeightChange, offKeyboardHeightChange, getSelectedTextRange, request, downloadFile, uploadFile, sendSocketMessage, onSocketOpen, onSocketMessage, onSocketError, onSocketClose, connectSocket, closeSocket, stopLocalServiceDiscovery, startLocalServiceDiscovery, onLocalServiceResolveFail, onLocalServiceLost, onLocalServiceFound, onLocalServiceDiscoveryStop, offLocalServiceResolveFail, offLocalServiceLost, offLocalServiceFound, offLocalServiceDiscoveryStop, createUDPSocket, setStorageSync, setStorage, removeStorageSync, removeStorage, getStorageSync, getStorageInfoSync, getStorageInfo, getStorage, clearStorageSync, clearStorage, createMapContext, saveImageToPhotosAlbum, previewImage, previewMedia, getImageInfo, compressImage, chooseMessageFile, chooseImage, saveVideoToPhotosAlbum, createVideoContext, chooseVideo, chooseMedia, stopVoice, setInnerAudioOption, playVoice, pauseVoice, getAvailableAudioSources, createInnerAudioContext, createAudioContext, stopBackgroundAudio, seekBackgroundAudio, playBackgroundAudio, pauseBackgroundAudio, onBackgroundAudioStop, onBackgroundAudioPlay, onBackgroundAudioPause, getBackgroundAudioPlayerState, getBackgroundAudioManager, createLivePusherContext, createLivePlayerContext, stopRecord, startRecord, getRecorderManager, createCameraContext, stopLocationUpdate, startLocationUpdateBackground, startLocationUpdate, openLocation, onLocationChange, getLocation, chooseLocation, updateShareMenu, showShareMenu, hideShareMenu, getShareInfo, createOffscreenCanvas, createCanvasContext, canvasToTempFilePath, canvasPutImageData, canvasGetImageData, saveFile, removeSavedFile, openDocument, getSavedFileList, getSavedFileInfo, getFileSystemManager, getFileInfo, login, checkSession, navigateToMiniProgram, navigateBackMiniProgram, getAccountInfoSync, getUserInfo, reportMonitor, reportAnalytics, requestPayment, authorize, openSetting, getSetting, chooseAddress, openCard, addCard, chooseInvoiceTitle, chooseInvoice, startSoterAuthentication, checkIsSupportSoterAuthentication, checkIsSoterEnrolledInDevice, getWeRunData, stopBeaconDiscovery, startBeaconDiscovery, onBeaconUpdate, offBeaconUpdate, onBeaconServiceChange, offBeaconServiceChange, getBeacons, stopWifi, startWifi, setWifiList, onWifiConnected, offWifiConnected, onGetWifiList, offGetWifiList, getWifiList, getConnectedWifi, connectWifi, addPhoneContact, writeBLECharacteristicValue, readBLECharacteristicValue, onBLEConnectionStateChange, offBLEConnectionStateChange, onBLECharacteristicValueChange, offBLECharacteristicValueChange, notifyBLECharacteristicValueChange, getBLEDeviceServices, getBLEDeviceCharacteristics, createBLEConnection, closeBLEConnection, stopBluetoothDevicesDiscovery, startBluetoothDevicesDiscovery, openBluetoothAdapter, onBluetoothDeviceFound, offBluetoothDeviceFound, onBluetoothAdapterStateChange, offBluetoothAdapterStateChange, getConnectedBluetoothDevices, getBluetoothDevices, getBluetoothAdapterState, closeBluetoothAdapter, getBatteryInfoSync, getBatteryInfo, setClipboardData, getClipboardData, stopHCE, startHCE, sendHCEMessage, onHCEMessage, offHCEMessage, getHCEState, onNetworkStatusChange, offNetworkStatusChange, getNetworkType, setScreenBrightness, setKeepScreenOn, onUserCaptureScreen, offUserCaptureScreen, getScreenBrightness, makePhoneCall, stopAccelerometer, startAccelerometer, onAccelerometerChange, offAccelerometerChange, stopCompass, startCompass, onCompassChange, offCompassChange, stopDeviceMotionListening, startDeviceMotionListening, onDeviceMotionChange, offDeviceMotionChange, stopGyroscope, startGyroscope, onGyroscopeChange, offGyroscopeChange, onMemoryWarning, offMemoryWarning, scanCode, vibrateShort, vibrateLong, createWorker, getExtConfigSync, getExtConfig, createSelectorQuery, createIntersectionObserver, createRewardedVideoAd, createInterstitialAd, cloud, requestSubscribeMessage, hideHomeButton, getRealtimeLogManager, hideKeyboard, getUserProfile, showShareImageMenu, shareVideoMessage, shareFileMessage, onCopyUrl, offCopyUrl, authPrivateMessage, openCustomerServiceChat, getGroupEnterInfo, reserveChannelsLive, openChannelsLive, openChannelsActivity, getChannelsLiveNoticeInfo, getChannelsLiveInfo, chooseLicensePlate, shareToWeRun, showRedPackage, addVideoToFavorites, addFileToFavorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return canIUse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return base64ToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return arrayBufferToBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return getSystemInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return getSystemInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return getUpdateManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return getLaunchOptionsSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPageNotFound", function() { return onPageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAudioInterruptionEnd", function() { return onAudioInterruptionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAppShow", function() { return onAppShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAppHide", function() { return onAppHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offPageNotFound", function() { return offPageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offError", function() { return offError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionEnd", function() { return offAudioInterruptionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionBegin", function() { return offAudioInterruptionBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAppShow", function() { return offAppShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAppHide", function() { return offAppHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEnableDebug", function() { return setEnableDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogManager", function() { return getLogManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return switchTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return reLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return navigateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return navigateBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return showToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return showActionSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return hideToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return hideLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return showNavigationBarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return setNavigationBarTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarColor", function() { return setNavigationBarColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return hideNavigationBarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return setBackgroundTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return setBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return showTabBarRedDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return showTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return setTabBarStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return setTabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return setTabBarBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return removeTabBarBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return hideTabBarRedDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return hideTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return loadFontFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return stopPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return startPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return pageScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return createAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTopBarText", function() { return setTopBarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonBoundingClientRect", function() { return getMenuButtonBoundingClientRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onWindowResize", function() { return onWindowResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offWindowResize", function() { return offWindowResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyboardHeightChange", function() { return onKeyboardHeightChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offKeyboardHeightChange", function() { return offKeyboardHeightChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextRange", function() { return getSelectedTextRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return sendSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return onSocketOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return onSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return onSocketError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return onSocketClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return connectSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return closeSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopLocalServiceDiscovery", function() { return stopLocalServiceDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocalServiceDiscovery", function() { return startLocalServiceDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceResolveFail", function() { return onLocalServiceResolveFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceLost", function() { return onLocalServiceLost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceFound", function() { return onLocalServiceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceDiscoveryStop", function() { return onLocalServiceDiscoveryStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceResolveFail", function() { return offLocalServiceResolveFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceLost", function() { return offLocalServiceLost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceFound", function() { return offLocalServiceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceDiscoveryStop", function() { return offLocalServiceDiscoveryStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUDPSocket", function() { return createUDPSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return setStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return setStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return removeStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return removeStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return getStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return getStorageInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return getStorageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return getStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return clearStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return clearStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return createMapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return saveImageToPhotosAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return previewImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewMedia", function() { return previewMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return getImageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return compressImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseMessageFile", function() { return chooseMessageFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return chooseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return saveVideoToPhotosAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return createVideoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return chooseVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseMedia", function() { return chooseMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopVoice", function() { return stopVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInnerAudioOption", function() { return setInnerAudioOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playVoice", function() { return playVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseVoice", function() { return pauseVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableAudioSources", function() { return getAvailableAudioSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInnerAudioContext", function() { return createInnerAudioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return createAudioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBackgroundAudio", function() { return stopBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seekBackgroundAudio", function() { return seekBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playBackgroundAudio", function() { return playBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseBackgroundAudio", function() { return pauseBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioStop", function() { return onBackgroundAudioStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPlay", function() { return onBackgroundAudioPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPause", function() { return onBackgroundAudioPause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioPlayerState", function() { return getBackgroundAudioPlayerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioManager", function() { return getBackgroundAudioManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLivePusherContext", function() { return createLivePusherContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLivePlayerContext", function() { return createLivePlayerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopRecord", function() { return stopRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startRecord", function() { return startRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecorderManager", function() { return getRecorderManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCameraContext", function() { return createCameraContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopLocationUpdate", function() { return stopLocationUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdateBackground", function() { return startLocationUpdateBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdate", function() { return startLocationUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return openLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocationChange", function() { return onLocationChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return chooseLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateShareMenu", function() { return updateShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return showShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return hideShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShareInfo", function() { return getShareInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOffscreenCanvas", function() { return createOffscreenCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return createCanvasContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasToTempFilePath", function() { return canvasToTempFilePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasPutImageData", function() { return canvasPutImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasGetImageData", function() { return canvasGetImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return saveFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return removeSavedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return openDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return getSavedFileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return getSavedFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return getFileSystemManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return getFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return checkSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return navigateToMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return navigateBackMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountInfoSync", function() { return getAccountInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportMonitor", function() { return reportMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return reportAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return requestPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return authorize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return openSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return chooseAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCard", function() { return openCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return addCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseInvoiceTitle", function() { return chooseInvoiceTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseInvoice", function() { return chooseInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startSoterAuthentication", function() { return startSoterAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsSupportSoterAuthentication", function() { return checkIsSupportSoterAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsSoterEnrolledInDevice", function() { return checkIsSoterEnrolledInDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeRunData", function() { return getWeRunData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return stopBeaconDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return startBeaconDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return onBeaconUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBeaconUpdate", function() { return offBeaconUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return onBeaconServiceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBeaconServiceChange", function() { return offBeaconServiceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return getBeacons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopWifi", function() { return stopWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startWifi", function() { return startWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWifiList", function() { return setWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onWifiConnected", function() { return onWifiConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offWifiConnected", function() { return offWifiConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGetWifiList", function() { return onGetWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offGetWifiList", function() { return offGetWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWifiList", function() { return getWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return getConnectedWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectWifi", function() { return connectWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return addPhoneContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return writeBLECharacteristicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return readBLECharacteristicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChange", function() { return onBLEConnectionStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBLEConnectionStateChange", function() { return offBLEConnectionStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return onBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBLECharacteristicValueChange", function() { return offBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return notifyBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return getBLEDeviceServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return getBLEDeviceCharacteristics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBLEConnection", function() { return createBLEConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBLEConnection", function() { return closeBLEConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return stopBluetoothDevicesDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return startBluetoothDevicesDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return openBluetoothAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return onBluetoothDeviceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBluetoothDeviceFound", function() { return offBluetoothDeviceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return onBluetoothAdapterStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBluetoothAdapterStateChange", function() { return offBluetoothAdapterStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return getConnectedBluetoothDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return getBluetoothDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return getBluetoothAdapterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return closeBluetoothAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return getBatteryInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return getBatteryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return setClipboardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return getClipboardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopHCE", function() { return stopHCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHCE", function() { return startHCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendHCEMessage", function() { return sendHCEMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onHCEMessage", function() { return onHCEMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offHCEMessage", function() { return offHCEMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHCEState", function() { return getHCEState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return onNetworkStatusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offNetworkStatusChange", function() { return offNetworkStatusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return getNetworkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return setScreenBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return setKeepScreenOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return onUserCaptureScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offUserCaptureScreen", function() { return offUserCaptureScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return getScreenBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return makePhoneCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return stopAccelerometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return startAccelerometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return onAccelerometerChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAccelerometerChange", function() { return offAccelerometerChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return stopCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return startCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return onCompassChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offCompassChange", function() { return offCompassChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopDeviceMotionListening", function() { return stopDeviceMotionListening; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startDeviceMotionListening", function() { return startDeviceMotionListening; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDeviceMotionChange", function() { return onDeviceMotionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offDeviceMotionChange", function() { return offDeviceMotionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopGyroscope", function() { return stopGyroscope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGyroscope", function() { return startGyroscope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return onGyroscopeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offGyroscopeChange", function() { return offGyroscopeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return onMemoryWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offMemoryWarning", function() { return offMemoryWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return scanCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return vibrateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return vibrateLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWorker", function() { return createWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return getExtConfigSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return getExtConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return createSelectorQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return createIntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return createRewardedVideoAd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInterstitialAd", function() { return createInterstitialAd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloud", function() { return cloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestSubscribeMessage", function() { return requestSubscribeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideHomeButton", function() { return hideHomeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRealtimeLogManager", function() { return getRealtimeLogManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return hideKeyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProfile", function() { return getUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showShareImageMenu", function() { return showShareImageMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareVideoMessage", function() { return shareVideoMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareFileMessage", function() { return shareFileMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCopyUrl", function() { return onCopyUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offCopyUrl", function() { return offCopyUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authPrivateMessage", function() { return authPrivateMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCustomerServiceChat", function() { return openCustomerServiceChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupEnterInfo", function() { return getGroupEnterInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reserveChannelsLive", function() { return reserveChannelsLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openChannelsLive", function() { return openChannelsLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openChannelsActivity", function() { return openChannelsActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChannelsLiveNoticeInfo", function() { return getChannelsLiveNoticeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChannelsLiveInfo", function() { return getChannelsLiveInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseLicensePlate", function() { return chooseLicensePlate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareToWeRun", function() { return shareToWeRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showRedPackage", function() { return showRedPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVideoToFavorites", function() { return addVideoToFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFileToFavorites", function() { return addFileToFavorites; });
/* harmony import */ var _remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/framework-shared */ "./node_modules/@remax/framework-shared/esm/index.js");

var canIUse = wx.canIUse;
var base64ToArrayBuffer = wx.base64ToArrayBuffer;
var arrayBufferToBase64 = wx.arrayBufferToBase64;
var getSystemInfoSync = wx.getSystemInfoSync;
var getSystemInfo = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getSystemInfo);
var getUpdateManager = wx.getUpdateManager;
var getLaunchOptionsSync = wx.getLaunchOptionsSync;
var onPageNotFound = wx.onPageNotFound;
var onError = wx.onError;
var onAudioInterruptionEnd = wx.onAudioInterruptionEnd;
var onAppShow = wx.onAppShow;
var onAppHide = wx.onAppHide;
var offPageNotFound = wx.offPageNotFound;
var offError = wx.offError;
var offAudioInterruptionEnd = wx.offAudioInterruptionEnd;
var offAudioInterruptionBegin = wx.offAudioInterruptionBegin;
var offAppShow = wx.offAppShow;
var offAppHide = wx.offAppHide;
var setEnableDebug = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setEnableDebug);
var getLogManager = wx.getLogManager;
var switchTab = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.switchTab);
var reLaunch = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.reLaunch);
var redirectTo = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.redirectTo);
var navigateTo = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.navigateTo);
var navigateBack = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.navigateBack);
var showToast = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showToast);
var showModal = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showModal);
var showLoading = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showLoading);
var showActionSheet = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showActionSheet);
var hideToast = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideToast);
var hideLoading = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideLoading);
var showNavigationBarLoading = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showNavigationBarLoading);
var setNavigationBarTitle = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setNavigationBarTitle);
var setNavigationBarColor = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setNavigationBarColor);
var hideNavigationBarLoading = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideNavigationBarLoading);
var setBackgroundTextStyle = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setBackgroundTextStyle);
var setBackgroundColor = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setBackgroundColor);
var showTabBarRedDot = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showTabBarRedDot);
var showTabBar = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showTabBar);
var setTabBarStyle = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setTabBarStyle);
var setTabBarItem = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setTabBarItem);
var setTabBarBadge = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setTabBarBadge);
var removeTabBarBadge = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.removeTabBarBadge);
var hideTabBarRedDot = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideTabBarRedDot);
var hideTabBar = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideTabBar);
var loadFontFace = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.loadFontFace);
var stopPullDownRefresh = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopPullDownRefresh);
var startPullDownRefresh = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startPullDownRefresh);
var pageScrollTo = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.pageScrollTo);
var createAnimation = wx.createAnimation;
var setTopBarText = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setTopBarText);
var nextTick = wx.nextTick;
var getMenuButtonBoundingClientRect = wx.getMenuButtonBoundingClientRect;
var onWindowResize = wx.onWindowResize;
var offWindowResize = wx.offWindowResize;
var onKeyboardHeightChange = wx.onKeyboardHeightChange;
var offKeyboardHeightChange = wx.offKeyboardHeightChange;
var getSelectedTextRange = wx.getSelectedTextRange;
var request = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.request);
var downloadFile = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.downloadFile);
var uploadFile = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.uploadFile);
var sendSocketMessage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.sendSocketMessage);
var onSocketOpen = wx.onSocketOpen;
var onSocketMessage = wx.onSocketMessage;
var onSocketError = wx.onSocketError;
var onSocketClose = wx.onSocketClose;
var connectSocket = wx.connectSocket;
var closeSocket = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.closeSocket);
var stopLocalServiceDiscovery = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopLocalServiceDiscovery);
var startLocalServiceDiscovery = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startLocalServiceDiscovery);
var onLocalServiceResolveFail = wx.onLocalServiceResolveFail;
var onLocalServiceLost = wx.onLocalServiceLost;
var onLocalServiceFound = wx.onLocalServiceFound;
var onLocalServiceDiscoveryStop = wx.onLocalServiceDiscoveryStop;
var offLocalServiceResolveFail = wx.offLocalServiceResolveFail;
var offLocalServiceLost = wx.offLocalServiceLost;
var offLocalServiceFound = wx.offLocalServiceFound;
var offLocalServiceDiscoveryStop = wx.offLocalServiceDiscoveryStop;
var createUDPSocket = wx.createUDPSocket;
var setStorageSync = wx.setStorageSync;
var setStorage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setStorage);
var removeStorageSync = wx.removeStorageSync;
var removeStorage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.removeStorage);
var getStorageSync = wx.getStorageSync;
var getStorageInfoSync = wx.getStorageInfoSync;
var getStorageInfo = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getStorageInfo);
var getStorage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getStorage);
var clearStorageSync = wx.clearStorageSync;
var clearStorage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.clearStorage);
var createMapContext = wx.createMapContext;
var saveImageToPhotosAlbum = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.saveImageToPhotosAlbum);
var previewImage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.previewImage);
var previewMedia = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.previewMedia);
var getImageInfo = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getImageInfo);
var compressImage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.compressImage);
var chooseMessageFile = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseMessageFile);
var chooseImage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseImage);
var saveVideoToPhotosAlbum = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.saveVideoToPhotosAlbum);
var createVideoContext = wx.createVideoContext;
var chooseVideo = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseVideo);
var chooseMedia = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseMedia);
var stopVoice = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopVoice);
var setInnerAudioOption = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setInnerAudioOption);
var playVoice = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.playVoice);
var pauseVoice = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.pauseVoice);
var getAvailableAudioSources = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getAvailableAudioSources);
var createInnerAudioContext = wx.createInnerAudioContext;
var createAudioContext = wx.createAudioContext;
var stopBackgroundAudio = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopBackgroundAudio);
var seekBackgroundAudio = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.seekBackgroundAudio);
var playBackgroundAudio = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.playBackgroundAudio);
var pauseBackgroundAudio = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.pauseBackgroundAudio);
var onBackgroundAudioStop = wx.onBackgroundAudioStop;
var onBackgroundAudioPlay = wx.onBackgroundAudioPlay;
var onBackgroundAudioPause = wx.onBackgroundAudioPause;
var getBackgroundAudioPlayerState = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBackgroundAudioPlayerState);
var getBackgroundAudioManager = wx.getBackgroundAudioManager;
var createLivePusherContext = wx.createLivePusherContext;
var createLivePlayerContext = wx.createLivePlayerContext;
var stopRecord = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopRecord);
var startRecord = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startRecord);
var getRecorderManager = wx.getRecorderManager;
var createCameraContext = wx.createCameraContext;
var stopLocationUpdate = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopLocationUpdate);
var startLocationUpdateBackground = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startLocationUpdateBackground);
var startLocationUpdate = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startLocationUpdate);
var openLocation = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.openLocation);
var onLocationChange = wx.onLocationChange;
var getLocation = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getLocation);
var chooseLocation = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseLocation);
var updateShareMenu = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.updateShareMenu);
var showShareMenu = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showShareMenu);
var hideShareMenu = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideShareMenu);
var getShareInfo = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getShareInfo);
var createOffscreenCanvas = wx.createOffscreenCanvas;
var createCanvasContext = wx.createCanvasContext;
var canvasToTempFilePath = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.canvasToTempFilePath);
var canvasPutImageData = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.canvasPutImageData);
var canvasGetImageData = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.canvasGetImageData);
var saveFile = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.saveFile);
var removeSavedFile = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.removeSavedFile);
var openDocument = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.openDocument);
var getSavedFileList = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getSavedFileList);
var getSavedFileInfo = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getSavedFileInfo);
var getFileSystemManager = wx.getFileSystemManager;
var getFileInfo = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getFileInfo);
var login = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.login);
var checkSession = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.checkSession);
var navigateToMiniProgram = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.navigateToMiniProgram);
var navigateBackMiniProgram = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.navigateBackMiniProgram);
var getAccountInfoSync = wx.getAccountInfoSync;
var getUserInfo = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getUserInfo);
var reportMonitor = wx.reportMonitor;
var reportAnalytics = wx.reportAnalytics;
var requestPayment = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.requestPayment);
var authorize = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.authorize);
var openSetting = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.openSetting);
var getSetting = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getSetting);
var chooseAddress = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseAddress);
var openCard = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.openCard);
var addCard = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.addCard);
var chooseInvoiceTitle = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseInvoiceTitle);
var chooseInvoice = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseInvoice);
var startSoterAuthentication = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startSoterAuthentication);
var checkIsSupportSoterAuthentication = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.checkIsSupportSoterAuthentication);
var checkIsSoterEnrolledInDevice = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.checkIsSoterEnrolledInDevice);
var getWeRunData = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getWeRunData);
var stopBeaconDiscovery = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopBeaconDiscovery);
var startBeaconDiscovery = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startBeaconDiscovery);
var onBeaconUpdate = wx.onBeaconUpdate;
var offBeaconUpdate = wx.offBeaconUpdate;
var onBeaconServiceChange = wx.onBeaconServiceChange;
var offBeaconServiceChange = wx.offBeaconServiceChange;
var getBeacons = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBeacons);
var stopWifi = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopWifi);
var startWifi = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startWifi);
var setWifiList = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setWifiList);
var onWifiConnected = wx.onWifiConnected;
var offWifiConnected = wx.offWifiConnected;
var onGetWifiList = wx.onGetWifiList;
var offGetWifiList = wx.offGetWifiList;
var getWifiList = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getWifiList);
var getConnectedWifi = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getConnectedWifi);
var connectWifi = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.connectWifi);
var addPhoneContact = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.addPhoneContact);
var writeBLECharacteristicValue = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.writeBLECharacteristicValue);
var readBLECharacteristicValue = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.readBLECharacteristicValue);
var onBLEConnectionStateChange = wx.onBLEConnectionStateChange;
var offBLEConnectionStateChange = wx.offBLEConnectionStateChange;
var onBLECharacteristicValueChange = wx.onBLECharacteristicValueChange;
var offBLECharacteristicValueChange = wx.offBLECharacteristicValueChange;
var notifyBLECharacteristicValueChange = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.notifyBLECharacteristicValueChange);
var getBLEDeviceServices = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBLEDeviceServices);
var getBLEDeviceCharacteristics = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBLEDeviceCharacteristics);
var createBLEConnection = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.createBLEConnection);
var closeBLEConnection = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.closeBLEConnection);
var stopBluetoothDevicesDiscovery = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopBluetoothDevicesDiscovery);
var startBluetoothDevicesDiscovery = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startBluetoothDevicesDiscovery);
var openBluetoothAdapter = wx.openBluetoothAdapter;
var onBluetoothDeviceFound = wx.onBluetoothDeviceFound;
var offBluetoothDeviceFound = wx.offBluetoothDeviceFound;
var onBluetoothAdapterStateChange = wx.onBluetoothAdapterStateChange;
var offBluetoothAdapterStateChange = wx.offBluetoothAdapterStateChange;
var getConnectedBluetoothDevices = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getConnectedBluetoothDevices);
var getBluetoothDevices = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBluetoothDevices);
var getBluetoothAdapterState = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBluetoothAdapterState);
var closeBluetoothAdapter = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.closeBluetoothAdapter);
var getBatteryInfoSync = wx.getBatteryInfoSync;
var getBatteryInfo = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBatteryInfo);
var setClipboardData = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setClipboardData);
var getClipboardData = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getClipboardData);
var stopHCE = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopHCE);
var startHCE = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startHCE);
var sendHCEMessage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.sendHCEMessage);
var onHCEMessage = wx.onHCEMessage;
var offHCEMessage = wx.offHCEMessage;
var getHCEState = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getHCEState);
var onNetworkStatusChange = wx.onNetworkStatusChange;
var offNetworkStatusChange = wx.offNetworkStatusChange;
var getNetworkType = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getNetworkType);
var setScreenBrightness = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setScreenBrightness);
var setKeepScreenOn = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setKeepScreenOn);
var onUserCaptureScreen = wx.onUserCaptureScreen;
var offUserCaptureScreen = wx.offUserCaptureScreen;
var getScreenBrightness = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getScreenBrightness);
var makePhoneCall = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.makePhoneCall);
var stopAccelerometer = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopAccelerometer);
var startAccelerometer = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startAccelerometer);
var onAccelerometerChange = wx.onAccelerometerChange;
var offAccelerometerChange = wx.offAccelerometerChange;
var stopCompass = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopCompass);
var startCompass = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startCompass);
var onCompassChange = wx.onCompassChange;
var offCompassChange = wx.offCompassChange;
var stopDeviceMotionListening = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopDeviceMotionListening);
var startDeviceMotionListening = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startDeviceMotionListening);
var onDeviceMotionChange = wx.onDeviceMotionChange;
var offDeviceMotionChange = wx.offDeviceMotionChange;
var stopGyroscope = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopGyroscope);
var startGyroscope = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startGyroscope);
var onGyroscopeChange = wx.onGyroscopeChange;
var offGyroscopeChange = wx.offGyroscopeChange;
var onMemoryWarning = wx.onMemoryWarning;
var offMemoryWarning = wx.offMemoryWarning;
var scanCode = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.scanCode);
var vibrateShort = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.vibrateShort);
var vibrateLong = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.vibrateLong);
var createWorker = wx.createWorker;
var getExtConfigSync = wx.getExtConfigSync;
var getExtConfig = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getExtConfig);
var createSelectorQuery = wx.createSelectorQuery;
var createIntersectionObserver = wx.createIntersectionObserver;
var createRewardedVideoAd = wx.createRewardedVideoAd;
var createInterstitialAd = wx.createInterstitialAd;
var cloud = wx.cloud;
var requestSubscribeMessage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.requestSubscribeMessage);
var hideHomeButton = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideHomeButton);
var getRealtimeLogManager = wx.getRealtimeLogManager;
var hideKeyboard = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideKeyboard);
var getUserProfile = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getUserProfile);
var showShareImageMenu = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showShareImageMenu);
var shareVideoMessage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.shareVideoMessage);
var shareFileMessage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.shareFileMessage);
var onCopyUrl = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.onCopyUrl);
var offCopyUrl = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.offCopyUrl);
var authPrivateMessage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.authPrivateMessage);
var openCustomerServiceChat = wx.openCustomerServiceChat;
var getGroupEnterInfo = wx.getGroupEnterInfo;
var reserveChannelsLive = wx.reserveChannelsLive;
var openChannelsLive = wx.openChannelsLive;
var openChannelsActivity = wx.openChannelsActivity;
var getChannelsLiveNoticeInfo = wx.getChannelsLiveNoticeInfo;
var getChannelsLiveInfo = wx.getChannelsLiveInfo;
var chooseLicensePlate = wx.chooseLicensePlate;
var shareToWeRun = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.shareToWeRun);
var showRedPackage = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showRedPackage);
var addVideoToFavorites = wx.addVideoToFavorites;
var addFileToFavorites = wx.addFileToFavorites;

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Ad/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Ad/index.js ***!
  \*******************************************************************/
/*! exports provided: Ad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return Ad; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

var Ad = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('ad');
Ad.defaultProps = {
  adType: 'banner',
  adTheme: 'white'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/AdCustom/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/AdCustom/index.js ***!
  \*************************************************************************/
/*! exports provided: AdCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdCustom", function() { return AdCustom; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * 原生模版广告
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html
 */

var AdCustom = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('ad-custom');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Audio/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Audio/index.js ***!
  \**********************************************************************/
/*! exports provided: Audio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return Audio; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
 // 微信已不再维护

var Audio = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('audio');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Button/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Button/index.js ***!
  \***********************************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/button.html
 * https://q.qq.com/wiki/develop/miniprogram/component/form/button.html
 */

var Button = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('button');
Button.defaultProps = {
  hoverClassName: 'button-hover',
  hoverStartTime: 20,
  hoverStayTime: 70
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Camera/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Camera/index.js ***!
  \***********************************************************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/camera.html
 */

var Camera = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('camera');
Camera.defaultProps = {
  mode: 'normal',
  resolution: 'medium',
  devicePosition: 'back',
  flash: 'auto',
  frameSize: 'medium'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Canvas/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Canvas/index.js ***!
  \***********************************************************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html
 */

var Canvas = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('canvas');
Canvas.defaultProps = {
  disableScroll: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Checkbox/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Checkbox/index.js ***!
  \*************************************************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html
 */

var Checkbox = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('checkbox');
Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  color: '#09bb07'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/CheckboxGroup/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/CheckboxGroup/index.js ***!
  \******************************************************************************/
/*! exports provided: CheckboxGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return CheckboxGroup; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html
 */

var CheckboxGroup = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('checkbox-group');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/CoverImage/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/CoverImage/index.js ***!
  \***************************************************************************/
/*! exports provided: CoverImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return CoverImage; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html
 */

var CoverImage = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('cover-image');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/CoverView/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/CoverView/index.js ***!
  \**************************************************************************/
/*! exports provided: CoverView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return CoverView; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html
 */

var CoverView = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('cover-view');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Editor/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Editor/index.js ***!
  \***********************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/editor.html
 */

var Editor = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('editor');
Editor.defaultProps = {
  readOnly: false,
  showImgSize: false,
  showImgToolbar: false,
  showImgResize: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Form/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Form/index.js ***!
  \*********************************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/form.html
 */

var Form = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('form');
Form.defaultProps = {
  reportSubmit: false,
  reportSubmitTimeout: 0
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/FunctionalPageNavigator/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/FunctionalPageNavigator/index.js ***!
  \****************************************************************************************/
/*! exports provided: FunctionalPageNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return FunctionalPageNavigator; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html
 */

var FunctionalPageNavigator = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('functional-page-navigator');
FunctionalPageNavigator.defaultProps = {
  version: 'release'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Icon/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Icon/index.js ***!
  \*********************************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/icon.html
 */

var Icon = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('icon');
Icon.defaultProps = {
  size: 23
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Image/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Image/index.js ***!
  \**********************************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/image.html
 */

var Image = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('image');
Image.defaultProps = {
  mode: 'scaleToFill',
  webp: false,
  lazyLoad: false,
  showMenuByLongpress: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Input/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Input/index.js ***!
  \**********************************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/input.html
 */

var Input = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('input');
Input.defaultProps = {
  type: 'text',
  password: false,
  placeholderClassName: 'input-placeholder',
  disabled: false,
  cursorSpacing: 0,
  autoFocus: false,
  focus: false,
  alwaysEmbed: false,
  confirmType: 'done',
  confirmHold: false,
  maxlength: 140,
  selectionEnd: -1,
  selectionStart: -1,
  adjustPosition: true,
  holdKeyboard: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/KeyboardAccessory/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/KeyboardAccessory/index.js ***!
  \**********************************************************************************/
/*! exports provided: KeyboardAccessory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardAccessory", function() { return KeyboardAccessory; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/keyboard-accessory.html
 */

var KeyboardAccessory = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('KeyboardAccessory');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Label/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Label/index.js ***!
  \**********************************************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/label.html
 */

var Label = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('label');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/LivePlayer/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/LivePlayer/index.js ***!
  \***************************************************************************/
/*! exports provided: LivePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return LivePlayer; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html
 */

var LivePlayer = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('live-player');
LivePlayer.defaultProps = {
  mode: 'live',
  autoplay: false,
  muted: false,
  orientation: 'vertical',
  objectFit: 'contain',
  backgroundMute: false,
  minCache: 1,
  maxCache: 3,
  soundMode: 'speaker',
  autoPauseIfNavigate: true,
  autoPauseIfOpenNative: true
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/LivePusher/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/LivePusher/index.js ***!
  \***************************************************************************/
/*! exports provided: LivePusher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return LivePusher; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html
 */

var LivePusher = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('live-pusher');
LivePusher.defaultProps = {
  mode: 'RTC',
  autopush: false,
  muted: false,
  enableCamera: false,
  autoFocus: true,
  orientation: 'vertical',
  beauty: 0,
  whiteness: 0,
  aspect: '9:16',
  minBitrate: 200,
  maxBitrate: 1000,
  audioQuality: 'high',
  zoom: false,
  devicePosition: 'front',
  backgroundMute: false,
  mirror: false,
  remoteMirror: false,
  localMirror: 'auto',
  audioReverbType: 0,
  enableMic: true,
  enableAgc: true,
  enableAns: false,
  audioVolumeType: 'voicecall',
  videoWidth: 360,
  videoHeight: 640
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Map/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Map/index.js ***!
  \********************************************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/map.html
 */

var Map = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('map');
Map.defaultProps = {
  scale: 16,
  minScale: 3,
  maxScale: 20,
  showLocation: false,
  layerStyle: 1,
  rotate: 0,
  enable3D: false,
  showCompass: false,
  showScale: false,
  enableOverlooking: false,
  enableZoom: true,
  enableScroll: true,
  enableRotate: false,
  enableSatellite: false,
  enableTraffic: false,
  setting: {}
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/MatchMedia/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/MatchMedia/index.js ***!
  \***************************************************************************/
/*! exports provided: MatchMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchMedia", function() { return MatchMedia; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html
 */

var MatchMedia = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('match-media');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/MovableArea/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/MovableArea/index.js ***!
  \****************************************************************************/
/*! exports provided: MovableArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return MovableArea; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html
 */

var MovableArea = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('movable-area');
MovableArea.defaultProps = {
  scaleArea: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/MovableView/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/MovableView/index.js ***!
  \****************************************************************************/
/*! exports provided: MovableView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return MovableView; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html
 */

var MovableView = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('movable-view');
MovableView.defaultProps = {
  direction: 'none',
  inertia: false,
  outOfBounds: false,
  damping: 20,
  friction: 2,
  disabled: false,
  scale: false,
  scaleMin: 0,
  scaleMax: 10,
  scaleValue: 1,
  animation: true
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/NavigationBar/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/NavigationBar/index.js ***!
  \******************************************************************************/
/*! exports provided: NavigationBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBar", function() { return NavigationBar; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * 页面导航条配置节点，用于指定导航栏的一些属性。只能是 page-meta 组件内的第一个节点，需要配合它一同使用。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html
 */

var NavigationBar = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('navigation-bar');
NavigationBar.defaultProps = {
  loading: false,
  colorAnimationDuration: 0,
  colorAnimationTimingFunc: 'linear'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Navigator/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Navigator/index.js ***!
  \**************************************************************************/
/*! exports provided: Navigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return Navigator; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html
 */

var Navigator = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('navigator');
Navigator.defaultProps = {
  target: 'self',
  openType: 'navigate',
  delta: 1,
  hoverClassName: 'navigator-hover',
  hoverStopPropagation: false,
  hoverStartTime: 50,
  hoverStayTime: 600
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/OfficialAccount/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/OfficialAccount/index.js ***!
  \********************************************************************************/
/*! exports provided: OfficialAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return OfficialAccount; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html
 */

var OfficialAccount = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('official-account');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/OpenData/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/OpenData/index.js ***!
  \*************************************************************************/
/*! exports provided: OpenData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return OpenData; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html
 */

var OpenData = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('open-data');
OpenData.defaultProps = {
  lang: 'en'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/PageContainer/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/PageContainer/index.js ***!
  \******************************************************************************/
/*! exports provided: PageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContainer", function() { return PageContainer; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html
 */

var PageContainer = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('page-container');
PageContainer.defaultProps = {
  show: false,
  duration: 300,
  zIndex: 100,
  overlay: true,
  position: 'bottom',
  round: false,
  closeOnSlideDown: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/PageMeta/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/PageMeta/index.js ***!
  \*************************************************************************/
/*! exports provided: PageMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMeta", function() { return PageMeta; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * 页面属性配置节点，用于指定页面的一些属性、监听页面事件。只能是页面内的第一个节点。可以配合 navigation-bar 组件一同使用。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html
 */

var PageMeta = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('page-meta');
PageMeta.defaultProps = {
  scrollDuration: 300
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Picker/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Picker/index.js ***!
  \***********************************************************************/
/*! exports provided: Picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return Picker; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker.html
 */

var Picker = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('picker');
Picker.defaultProps = {
  mode: 'selector',
  disabled: false,
  // FIXME: value 的值与 mode 类型变化
  // value: 0,
  range: [],
  fields: 'day'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/PickerView/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/PickerView/index.js ***!
  \***************************************************************************/
/*! exports provided: PickerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return PickerView; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html
 */

var PickerView = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('picker-view');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/PickerViewColumn/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/PickerViewColumn/index.js ***!
  \*********************************************************************************/
/*! exports provided: PickerViewColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return PickerViewColumn; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html
 */

var PickerViewColumn = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('picker-view-column');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Progress/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Progress/index.js ***!
  \*************************************************************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/progress.html
 */

var Progress = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('progress');
Progress.defaultProps = {
  showInfo: false,
  borderRadius: 0,
  fontSize: 16,
  strokeWidth: 6,
  color: '#09BB07',
  activeColor: '#09BB07',
  backgroundColor: '#EBEBEB',
  active: false,
  activeMode: 'backwards',
  duration: 30
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Radio/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Radio/index.js ***!
  \**********************************************************************/
/*! exports provided: Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/radio.html
 */

var Radio = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('radio');
Radio.defaultProps = {
  checked: false,
  disabled: false,
  color: '#09BB07'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/RadioGroup/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/RadioGroup/index.js ***!
  \***************************************************************************/
/*! exports provided: RadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html
 */

var RadioGroup = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('radio-group');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/RichText/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/RichText/index.js ***!
  \*************************************************************************/
/*! exports provided: RichText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return RichText; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html
 */

var RichText = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('rich-text');
RichText.defaultProps = {
  nodes: []
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/ScrollView/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/ScrollView/index.js ***!
  \***************************************************************************/
/*! exports provided: ScrollView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return ScrollView; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

var ScrollView = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('scroll-view');
ScrollView.defaultProps = {
  upperThreshold: 50,
  lowerThreshold: 50,
  scrollX: false,
  scrollY: false,
  scrollWithAnimation: false,
  enableBackToTop: false,
  enableFlex: false,
  scrollAnchoring: false,
  refresherEnabled: false,
  refresherThreshold: 45,
  refresherDefaultStyle: 'black',
  refresherBackground: '#fff',
  refresherTriggered: false,
  enhanced: false,
  bounces: true,
  showScrollbar: true,
  pagingEnabled: false,
  fastDeceleration: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/ShareElement/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/ShareElement/index.js ***!
  \*****************************************************************************/
/*! exports provided: ShareElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareElement", function() { return ShareElement; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/** @see https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html */

var ShareElement = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('share-element');
ShareElement.defaultProps = {
  transform: false,
  duration: 300,
  easingFunction: 'ease-out'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Slider/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Slider/index.js ***!
  \***********************************************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/slider.html
 */

var Slider = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('slider');
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  value: 0,
  color: '#e9e9e9',
  selectedColor: '#1aad19',
  activeColor: '#1aad19',
  backgroundColor: '#e9e9e9',
  blockSize: 28,
  blockColor: '#ffffff',
  showValue: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Swiper/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Swiper/index.js ***!
  \***********************************************************************/
/*! exports provided: Swiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html
 */

var Swiper = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('swiper');
Swiper.defaultProps = {
  indicatorDots: false,
  indicatorColor: 'rgba(0, 0, 0, .3)',
  indicatorActiveColor: '#000000',
  autoplay: false,
  current: 0,
  interval: 5000,
  duration: 500,
  circular: false,
  vertical: false,
  previousMargin: '0px',
  nextMargin: '0px',
  displayMultipleItems: 1,
  skipHiddenItemLayout: false,
  easingFunction: 'default',
  snapToEdge: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/SwiperItem/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/SwiperItem/index.js ***!
  \***************************************************************************/
/*! exports provided: SwiperItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return SwiperItem; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html
 */

var SwiperItem = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('swiper-item');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Switch/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Switch/index.js ***!
  \***********************************************************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/switch.html
 */

var Switch = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('switch');
Switch.defaultProps = {
  checked: false,
  disabled: false,
  type: 'switch',
  color: '#04BE02'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Text/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Text/index.js ***!
  \*********************************************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/text.html
 */

var Text = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('text');
Text.defaultProps = {
  selectable: false,
  userSelect: false,
  decode: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Textarea/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Textarea/index.js ***!
  \*************************************************************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html
 */

var Textarea = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('textarea');
Textarea.defaultProps = {
  placeholderClassName: 'textarea-placeholder',
  disabled: false,
  maxlength: 140,
  autoFocus: false,
  focus: false,
  autoHeight: false,
  fixed: false,
  cursorSpacing: 0,
  cursor: -1,
  showConfirmBar: true,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  holdKeyboard: false,
  disableDefaultPadding: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Video/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Video/index.js ***!
  \**********************************************************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var hostComponentName = 'video';

var VideoRender = function VideoRender(props, ref) {
  var children = props.children,
      restProps = __rest(props, ["children"]);

  var videoProps = __assign(__assign({}, restProps), {
    ref: ref
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](hostComponentName, videoProps, children);
};
/**
 * video 默认宽度 300px、高度 225px，可通过 wxss 设置宽高
 * https://developers.weixin.qq.com/miniprogram/dev/component/video.html
 */


var RemaxVideo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](VideoRender);
RemaxVideo.defaultProps = {
  controls: true,
  danmuBtn: false,
  enableDanmu: false,
  autoplay: false,
  loop: false,
  muted: false,
  initialTime: 0,
  pageGesture: false,
  showProgress: true,
  showFullscreenBtn: true,
  showPlayBtn: true,
  showCenterPlayBtn: true,
  enableProgressGesture: true,
  objectFit: 'contain',
  showMuteBtn: false,
  playBtnPosition: 'bottom',
  enablePlayGesture: false,
  autoPauseIfNavigate: true,
  autoPauseIfOpenNative: true,
  vslideGesture: false,
  vslideGestureInFullscreen: true,
  showCastingButton: false,
  pictureInPictureShowProgress: false,
  enableAutoRotation: false,
  showScreenLockButton: false,
  showSnapshotButton: false,
  showBackgroundPlaybackButton: false
};
var Video = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_1__["createHostComponent"])(hostComponentName, RemaxVideo);

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/View/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/View/index.js ***!
  \*********************************************************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/view.html
 */

var View = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('view');
View.defaultProps = {
  hoverClassName: 'none',
  hoverStopPropagation: false,
  hoverStartTime: 50,
  hoverStayTime: 400
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/VoipRoom/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/VoipRoom/index.js ***!
  \*************************************************************************/
/*! exports provided: VoipRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoipRoom", function() { return VoipRoom; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * 多人音视频对话。需用户授权 scope.camera、scope.record。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html
 */

var VoipRoom = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('voip-room');
VoipRoom.defaultProps = {
  mode: 'camera',
  devicePosition: 'front'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/WebView/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/WebView/index.js ***!
  \************************************************************************/
/*! exports provided: WebView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return WebView; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
 */

var WebView = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('web-view');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/index.js ***!
  \****************************************************************/
/*! exports provided: View, Input, Textarea, Video, Swiper, ScrollView, SwiperItem, MovableView, MovableArea, CoverView, CoverImage, Icon, Text, RichText, Progress, Button, CheckboxGroup, Checkbox, Form, Label, Picker, PickerView, PickerViewColumn, RadioGroup, Radio, Slider, Switch, Navigator, Image, LivePlayer, LivePusher, Map, Canvas, OpenData, OfficialAccount, Editor, Audio, Ad, WebView, FunctionalPageNavigator, Camera, MatchMedia, PageContainer, ShareElement, KeyboardAccessory, VoipRoom, AdCustom, PageMeta, NavigationBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./node_modules/@remax/wechat/esm/hostComponents/View/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./node_modules/@remax/wechat/esm/hostComponents/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_1__["Input"]; });

/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Textarea */ "./node_modules/@remax/wechat/esm/hostComponents/Textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_2__["Textarea"]; });

/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Video */ "./node_modules/@remax/wechat/esm/hostComponents/Video/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _Video__WEBPACK_IMPORTED_MODULE_3__["Video"]; });

/* harmony import */ var _Swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Swiper */ "./node_modules/@remax/wechat/esm/hostComponents/Swiper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _Swiper__WEBPACK_IMPORTED_MODULE_4__["Swiper"]; });

/* harmony import */ var _ScrollView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScrollView */ "./node_modules/@remax/wechat/esm/hostComponents/ScrollView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _ScrollView__WEBPACK_IMPORTED_MODULE_5__["ScrollView"]; });

/* harmony import */ var _SwiperItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwiperItem */ "./node_modules/@remax/wechat/esm/hostComponents/SwiperItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _SwiperItem__WEBPACK_IMPORTED_MODULE_6__["SwiperItem"]; });

/* harmony import */ var _MovableView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MovableView */ "./node_modules/@remax/wechat/esm/hostComponents/MovableView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _MovableView__WEBPACK_IMPORTED_MODULE_7__["MovableView"]; });

/* harmony import */ var _MovableArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MovableArea */ "./node_modules/@remax/wechat/esm/hostComponents/MovableArea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _MovableArea__WEBPACK_IMPORTED_MODULE_8__["MovableArea"]; });

/* harmony import */ var _CoverView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CoverView */ "./node_modules/@remax/wechat/esm/hostComponents/CoverView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _CoverView__WEBPACK_IMPORTED_MODULE_9__["CoverView"]; });

/* harmony import */ var _CoverImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CoverImage */ "./node_modules/@remax/wechat/esm/hostComponents/CoverImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _CoverImage__WEBPACK_IMPORTED_MODULE_10__["CoverImage"]; });

/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Icon */ "./node_modules/@remax/wechat/esm/hostComponents/Icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_11__["Icon"]; });

/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Text */ "./node_modules/@remax/wechat/esm/hostComponents/Text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_12__["Text"]; });

/* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RichText */ "./node_modules/@remax/wechat/esm/hostComponents/RichText/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _RichText__WEBPACK_IMPORTED_MODULE_13__["RichText"]; });

/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Progress */ "./node_modules/@remax/wechat/esm/hostComponents/Progress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _Progress__WEBPACK_IMPORTED_MODULE_14__["Progress"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Button */ "./node_modules/@remax/wechat/esm/hostComponents/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_15__["Button"]; });

/* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CheckboxGroup */ "./node_modules/@remax/wechat/esm/hostComponents/CheckboxGroup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _CheckboxGroup__WEBPACK_IMPORTED_MODULE_16__["CheckboxGroup"]; });

/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Checkbox */ "./node_modules/@remax/wechat/esm/hostComponents/Checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_17__["Checkbox"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Form */ "./node_modules/@remax/wechat/esm/hostComponents/Form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_18__["Form"]; });

/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Label */ "./node_modules/@remax/wechat/esm/hostComponents/Label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_19__["Label"]; });

/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Picker */ "./node_modules/@remax/wechat/esm/hostComponents/Picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker__WEBPACK_IMPORTED_MODULE_20__["Picker"]; });

/* harmony import */ var _PickerView__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PickerView */ "./node_modules/@remax/wechat/esm/hostComponents/PickerView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _PickerView__WEBPACK_IMPORTED_MODULE_21__["PickerView"]; });

/* harmony import */ var _PickerViewColumn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PickerViewColumn */ "./node_modules/@remax/wechat/esm/hostComponents/PickerViewColumn/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _PickerViewColumn__WEBPACK_IMPORTED_MODULE_22__["PickerViewColumn"]; });

/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./RadioGroup */ "./node_modules/@remax/wechat/esm/hostComponents/RadioGroup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _RadioGroup__WEBPACK_IMPORTED_MODULE_23__["RadioGroup"]; });

/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Radio */ "./node_modules/@remax/wechat/esm/hostComponents/Radio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _Radio__WEBPACK_IMPORTED_MODULE_24__["Radio"]; });

/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Slider */ "./node_modules/@remax/wechat/esm/hostComponents/Slider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _Slider__WEBPACK_IMPORTED_MODULE_25__["Slider"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Switch */ "./node_modules/@remax/wechat/esm/hostComponents/Switch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_26__["Switch"]; });

/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Navigator */ "./node_modules/@remax/wechat/esm/hostComponents/Navigator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _Navigator__WEBPACK_IMPORTED_MODULE_27__["Navigator"]; });

/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Image */ "./node_modules/@remax/wechat/esm/hostComponents/Image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_28__["Image"]; });

/* harmony import */ var _LivePlayer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./LivePlayer */ "./node_modules/@remax/wechat/esm/hostComponents/LivePlayer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return _LivePlayer__WEBPACK_IMPORTED_MODULE_29__["LivePlayer"]; });

/* harmony import */ var _LivePusher__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./LivePusher */ "./node_modules/@remax/wechat/esm/hostComponents/LivePusher/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return _LivePusher__WEBPACK_IMPORTED_MODULE_30__["LivePusher"]; });

/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Map */ "./node_modules/@remax/wechat/esm/hostComponents/Map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _Map__WEBPACK_IMPORTED_MODULE_31__["Map"]; });

/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Canvas */ "./node_modules/@remax/wechat/esm/hostComponents/Canvas/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _Canvas__WEBPACK_IMPORTED_MODULE_32__["Canvas"]; });

/* harmony import */ var _OpenData__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./OpenData */ "./node_modules/@remax/wechat/esm/hostComponents/OpenData/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return _OpenData__WEBPACK_IMPORTED_MODULE_33__["OpenData"]; });

/* harmony import */ var _OfficialAccount__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./OfficialAccount */ "./node_modules/@remax/wechat/esm/hostComponents/OfficialAccount/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return _OfficialAccount__WEBPACK_IMPORTED_MODULE_34__["OfficialAccount"]; });

/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Editor */ "./node_modules/@remax/wechat/esm/hostComponents/Editor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _Editor__WEBPACK_IMPORTED_MODULE_35__["Editor"]; });

/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Audio */ "./node_modules/@remax/wechat/esm/hostComponents/Audio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _Audio__WEBPACK_IMPORTED_MODULE_36__["Audio"]; });

/* harmony import */ var _Ad__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Ad */ "./node_modules/@remax/wechat/esm/hostComponents/Ad/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return _Ad__WEBPACK_IMPORTED_MODULE_37__["Ad"]; });

/* harmony import */ var _WebView__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./WebView */ "./node_modules/@remax/wechat/esm/hostComponents/WebView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _WebView__WEBPACK_IMPORTED_MODULE_38__["WebView"]; });

/* harmony import */ var _FunctionalPageNavigator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./FunctionalPageNavigator */ "./node_modules/@remax/wechat/esm/hostComponents/FunctionalPageNavigator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return _FunctionalPageNavigator__WEBPACK_IMPORTED_MODULE_39__["FunctionalPageNavigator"]; });

/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Camera */ "./node_modules/@remax/wechat/esm/hostComponents/Camera/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _Camera__WEBPACK_IMPORTED_MODULE_40__["Camera"]; });

/* harmony import */ var _MatchMedia__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./MatchMedia */ "./node_modules/@remax/wechat/esm/hostComponents/MatchMedia/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatchMedia", function() { return _MatchMedia__WEBPACK_IMPORTED_MODULE_41__["MatchMedia"]; });

/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./PageContainer */ "./node_modules/@remax/wechat/esm/hostComponents/PageContainer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageContainer", function() { return _PageContainer__WEBPACK_IMPORTED_MODULE_42__["PageContainer"]; });

/* harmony import */ var _ShareElement__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./ShareElement */ "./node_modules/@remax/wechat/esm/hostComponents/ShareElement/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShareElement", function() { return _ShareElement__WEBPACK_IMPORTED_MODULE_43__["ShareElement"]; });

/* harmony import */ var _KeyboardAccessory__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./KeyboardAccessory */ "./node_modules/@remax/wechat/esm/hostComponents/KeyboardAccessory/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardAccessory", function() { return _KeyboardAccessory__WEBPACK_IMPORTED_MODULE_44__["KeyboardAccessory"]; });

/* harmony import */ var _VoipRoom__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./VoipRoom */ "./node_modules/@remax/wechat/esm/hostComponents/VoipRoom/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoipRoom", function() { return _VoipRoom__WEBPACK_IMPORTED_MODULE_45__["VoipRoom"]; });

/* harmony import */ var _AdCustom__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./AdCustom */ "./node_modules/@remax/wechat/esm/hostComponents/AdCustom/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdCustom", function() { return _AdCustom__WEBPACK_IMPORTED_MODULE_46__["AdCustom"]; });

/* harmony import */ var _PageMeta__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./PageMeta */ "./node_modules/@remax/wechat/esm/hostComponents/PageMeta/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageMeta", function() { return _PageMeta__WEBPACK_IMPORTED_MODULE_47__["PageMeta"]; });

/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./NavigationBar */ "./node_modules/@remax/wechat/esm/hostComponents/NavigationBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationBar", function() { return _NavigationBar__WEBPACK_IMPORTED_MODULE_48__["NavigationBar"]; });



















































/***/ }),

/***/ "./node_modules/@remax/wechat/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/index.js ***!
  \*************************************************/
/*! exports provided: View, Input, Textarea, Video, Swiper, ScrollView, SwiperItem, MovableView, MovableArea, CoverView, CoverImage, Icon, Text, RichText, Progress, Button, CheckboxGroup, Checkbox, Form, Label, Picker, PickerView, PickerViewColumn, RadioGroup, Radio, Slider, Switch, Navigator, Image, LivePlayer, LivePusher, Map, Canvas, OpenData, OfficialAccount, Editor, Audio, Ad, WebView, FunctionalPageNavigator, Camera, MatchMedia, PageContainer, ShareElement, KeyboardAccessory, VoipRoom, AdCustom, PageMeta, NavigationBar, canIUse, base64ToArrayBuffer, arrayBufferToBase64, getSystemInfoSync, getSystemInfo, getUpdateManager, getLaunchOptionsSync, onPageNotFound, onError, onAudioInterruptionEnd, onAppShow, onAppHide, offPageNotFound, offError, offAudioInterruptionEnd, offAudioInterruptionBegin, offAppShow, offAppHide, setEnableDebug, getLogManager, switchTab, reLaunch, redirectTo, navigateTo, navigateBack, showToast, showModal, showLoading, showActionSheet, hideToast, hideLoading, showNavigationBarLoading, setNavigationBarTitle, setNavigationBarColor, hideNavigationBarLoading, setBackgroundTextStyle, setBackgroundColor, showTabBarRedDot, showTabBar, setTabBarStyle, setTabBarItem, setTabBarBadge, removeTabBarBadge, hideTabBarRedDot, hideTabBar, loadFontFace, stopPullDownRefresh, startPullDownRefresh, pageScrollTo, createAnimation, setTopBarText, nextTick, getMenuButtonBoundingClientRect, onWindowResize, offWindowResize, onKeyboardHeightChange, offKeyboardHeightChange, getSelectedTextRange, request, downloadFile, uploadFile, sendSocketMessage, onSocketOpen, onSocketMessage, onSocketError, onSocketClose, connectSocket, closeSocket, stopLocalServiceDiscovery, startLocalServiceDiscovery, onLocalServiceResolveFail, onLocalServiceLost, onLocalServiceFound, onLocalServiceDiscoveryStop, offLocalServiceResolveFail, offLocalServiceLost, offLocalServiceFound, offLocalServiceDiscoveryStop, createUDPSocket, setStorageSync, setStorage, removeStorageSync, removeStorage, getStorageSync, getStorageInfoSync, getStorageInfo, getStorage, clearStorageSync, clearStorage, createMapContext, saveImageToPhotosAlbum, previewImage, previewMedia, getImageInfo, compressImage, chooseMessageFile, chooseImage, saveVideoToPhotosAlbum, createVideoContext, chooseVideo, chooseMedia, stopVoice, setInnerAudioOption, playVoice, pauseVoice, getAvailableAudioSources, createInnerAudioContext, createAudioContext, stopBackgroundAudio, seekBackgroundAudio, playBackgroundAudio, pauseBackgroundAudio, onBackgroundAudioStop, onBackgroundAudioPlay, onBackgroundAudioPause, getBackgroundAudioPlayerState, getBackgroundAudioManager, createLivePusherContext, createLivePlayerContext, stopRecord, startRecord, getRecorderManager, createCameraContext, stopLocationUpdate, startLocationUpdateBackground, startLocationUpdate, openLocation, onLocationChange, getLocation, chooseLocation, updateShareMenu, showShareMenu, hideShareMenu, getShareInfo, createOffscreenCanvas, createCanvasContext, canvasToTempFilePath, canvasPutImageData, canvasGetImageData, saveFile, removeSavedFile, openDocument, getSavedFileList, getSavedFileInfo, getFileSystemManager, getFileInfo, login, checkSession, navigateToMiniProgram, navigateBackMiniProgram, getAccountInfoSync, getUserInfo, reportMonitor, reportAnalytics, requestPayment, authorize, openSetting, getSetting, chooseAddress, openCard, addCard, chooseInvoiceTitle, chooseInvoice, startSoterAuthentication, checkIsSupportSoterAuthentication, checkIsSoterEnrolledInDevice, getWeRunData, stopBeaconDiscovery, startBeaconDiscovery, onBeaconUpdate, offBeaconUpdate, onBeaconServiceChange, offBeaconServiceChange, getBeacons, stopWifi, startWifi, setWifiList, onWifiConnected, offWifiConnected, onGetWifiList, offGetWifiList, getWifiList, getConnectedWifi, connectWifi, addPhoneContact, writeBLECharacteristicValue, readBLECharacteristicValue, onBLEConnectionStateChange, offBLEConnectionStateChange, onBLECharacteristicValueChange, offBLECharacteristicValueChange, notifyBLECharacteristicValueChange, getBLEDeviceServices, getBLEDeviceCharacteristics, createBLEConnection, closeBLEConnection, stopBluetoothDevicesDiscovery, startBluetoothDevicesDiscovery, openBluetoothAdapter, onBluetoothDeviceFound, offBluetoothDeviceFound, onBluetoothAdapterStateChange, offBluetoothAdapterStateChange, getConnectedBluetoothDevices, getBluetoothDevices, getBluetoothAdapterState, closeBluetoothAdapter, getBatteryInfoSync, getBatteryInfo, setClipboardData, getClipboardData, stopHCE, startHCE, sendHCEMessage, onHCEMessage, offHCEMessage, getHCEState, onNetworkStatusChange, offNetworkStatusChange, getNetworkType, setScreenBrightness, setKeepScreenOn, onUserCaptureScreen, offUserCaptureScreen, getScreenBrightness, makePhoneCall, stopAccelerometer, startAccelerometer, onAccelerometerChange, offAccelerometerChange, stopCompass, startCompass, onCompassChange, offCompassChange, stopDeviceMotionListening, startDeviceMotionListening, onDeviceMotionChange, offDeviceMotionChange, stopGyroscope, startGyroscope, onGyroscopeChange, offGyroscopeChange, onMemoryWarning, offMemoryWarning, scanCode, vibrateShort, vibrateLong, createWorker, getExtConfigSync, getExtConfig, createSelectorQuery, createIntersectionObserver, createRewardedVideoAd, createInterstitialAd, cloud, requestSubscribeMessage, hideHomeButton, getRealtimeLogManager, hideKeyboard, getUserProfile, showShareImageMenu, shareVideoMessage, shareFileMessage, onCopyUrl, offCopyUrl, authPrivateMessage, openCustomerServiceChat, getGroupEnterInfo, reserveChannelsLive, openChannelsLive, openChannelsActivity, getChannelsLiveNoticeInfo, getChannelsLiveInfo, chooseLicensePlate, shareToWeRun, showRedPackage, addVideoToFavorites, addFileToFavorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostComponents */ "./node_modules/@remax/wechat/esm/hostComponents/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MovableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MovableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CoverView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CoverImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PickerView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PickerViewColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["LivePlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["LivePusher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["OpenData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["OfficialAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Audio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["FunctionalPageNavigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Camera"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatchMedia", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageContainer", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PageContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShareElement", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["ShareElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardAccessory", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["KeyboardAccessory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoipRoom", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["VoipRoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdCustom", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["AdCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageMeta", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PageMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationBar", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["NavigationBar"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./node_modules/@remax/wechat/esm/api/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["base64ToArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["arrayBufferToBase64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLaunchOptionsSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onPageNotFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAudioInterruptionEnd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppShow", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppHide", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offPageNotFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionEnd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionBegin", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAudioInterruptionBegin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppShow", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppHide", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEnableDebug", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setEnableDebug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLogManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLogManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showActionSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setNavigationBarTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarColor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setNavigationBarColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setBackgroundTextStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setBackgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["loadFontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTopBarText", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTopBarText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonBoundingClientRect", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getMenuButtonBoundingClientRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWindowResize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offWindowResize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onKeyboardHeightChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onKeyboardHeightChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offKeyboardHeightChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offKeyboardHeightChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextRange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSelectedTextRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["sendSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocalServiceDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocalServiceDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceResolveFail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceLost", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceDiscoveryStop", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceResolveFail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceLost", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceDiscoveryStop", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUDPSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createUDPSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["clearStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["clearStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createMapContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveImageToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewMedia", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["previewMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["compressImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseMessageFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseMessageFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveVideoToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseMedia", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopVoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInnerAudioOption", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setInnerAudioOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playVoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["playVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseVoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pauseVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAvailableAudioSources", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAvailableAudioSources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInnerAudioContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createInnerAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seekBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["seekBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["playBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pauseBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioStop", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBackgroundAudioStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPlay", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBackgroundAudioPlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPause", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBackgroundAudioPause"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioPlayerState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBackgroundAudioPlayerState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBackgroundAudioManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePusherContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createLivePusherContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePlayerContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createLivePlayerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopRecord", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startRecord", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRecorderManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getRecorderManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCameraContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createCameraContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocationUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdateBackground", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startLocationUpdateBackground"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocationChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocationChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["updateShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShareInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getShareInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOffscreenCanvas", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createOffscreenCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasToTempFilePath", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canvasToTempFilePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasPutImageData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canvasPutImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasGetImageData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canvasGetImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getFileSystemManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAccountInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAccountInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportMonitor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reportMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["requestPayment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["authorize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoiceTitle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseInvoiceTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseInvoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startSoterAuthentication", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSupportSoterAuthentication", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkIsSupportSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSoterEnrolledInDevice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkIsSoterEnrolledInDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeRunData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getWeRunData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBeaconUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBeaconServiceChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBeacons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWifiConnected", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onWifiConnected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offWifiConnected", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offWifiConnected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGetWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onGetWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offGetWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offGetWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getConnectedWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addPhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["writeBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["readBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBLEConnectionStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLEConnectionStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBLEConnectionStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["notifyBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBLEDeviceServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBLEDeviceCharacteristics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBLEConnection", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBLEConnection", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothDeviceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothAdapterStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getConnectedBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBluetoothAdapterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBatteryInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBatteryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopHCE", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startHCE", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendHCEMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["sendHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onHCEMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offHCEMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHCEState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getHCEState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offNetworkStatusChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offUserCaptureScreen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAccelerometerChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offCompassChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopDeviceMotionListening", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startDeviceMotionListening", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeviceMotionChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onDeviceMotionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offDeviceMotionChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offDeviceMotionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopGyroscope", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startGyroscope", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offGyroscopeChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offMemoryWarning", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["scanCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWorker", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getExtConfigSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getExtConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createRewardedVideoAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterstitialAd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createInterstitialAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloud", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["cloud"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestSubscribeMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["requestSubscribeMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideHomeButton", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideHomeButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRealtimeLogManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getRealtimeLogManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideKeyboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserProfile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUserProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showShareImageMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showShareImageMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shareVideoMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["shareVideoMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shareFileMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["shareFileMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCopyUrl", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onCopyUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offCopyUrl", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offCopyUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authPrivateMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["authPrivateMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCustomerServiceChat", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openCustomerServiceChat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGroupEnterInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getGroupEnterInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reserveChannelsLive", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reserveChannelsLive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openChannelsLive", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openChannelsLive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openChannelsActivity", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openChannelsActivity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChannelsLiveNoticeInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getChannelsLiveNoticeInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChannelsLiveInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getChannelsLiveInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLicensePlate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseLicensePlate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shareToWeRun", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["shareToWeRun"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showRedPackage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showRedPackage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addVideoToFavorites", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addVideoToFavorites"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addFileToFavorites", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addFileToFavorites"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@remax/wechat/esm/types/index.js");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./node_modules/@remax/wechat/esm/types/config.js":
/*!********************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/types/config.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@remax/wechat/esm/types/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/types/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/@remax/wechat/esm/types/config.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/remax/wechat.js":
/*!**************************************!*\
  !*** ./node_modules/remax/wechat.js ***!
  \**************************************/
/*! exports provided: View, Input, Textarea, Video, Swiper, ScrollView, SwiperItem, MovableView, MovableArea, CoverView, CoverImage, Icon, Text, RichText, Progress, Button, CheckboxGroup, Checkbox, Form, Label, Picker, PickerView, PickerViewColumn, RadioGroup, Radio, Slider, Switch, Navigator, Image, LivePlayer, LivePusher, Map, Canvas, OpenData, OfficialAccount, Editor, Audio, Ad, WebView, FunctionalPageNavigator, Camera, MatchMedia, PageContainer, ShareElement, KeyboardAccessory, VoipRoom, AdCustom, PageMeta, NavigationBar, canIUse, base64ToArrayBuffer, arrayBufferToBase64, getSystemInfoSync, getSystemInfo, getUpdateManager, getLaunchOptionsSync, onPageNotFound, onError, onAudioInterruptionEnd, onAppShow, onAppHide, offPageNotFound, offError, offAudioInterruptionEnd, offAudioInterruptionBegin, offAppShow, offAppHide, setEnableDebug, getLogManager, switchTab, reLaunch, redirectTo, navigateTo, navigateBack, showToast, showModal, showLoading, showActionSheet, hideToast, hideLoading, showNavigationBarLoading, setNavigationBarTitle, setNavigationBarColor, hideNavigationBarLoading, setBackgroundTextStyle, setBackgroundColor, showTabBarRedDot, showTabBar, setTabBarStyle, setTabBarItem, setTabBarBadge, removeTabBarBadge, hideTabBarRedDot, hideTabBar, loadFontFace, stopPullDownRefresh, startPullDownRefresh, pageScrollTo, createAnimation, setTopBarText, nextTick, getMenuButtonBoundingClientRect, onWindowResize, offWindowResize, onKeyboardHeightChange, offKeyboardHeightChange, getSelectedTextRange, request, downloadFile, uploadFile, sendSocketMessage, onSocketOpen, onSocketMessage, onSocketError, onSocketClose, connectSocket, closeSocket, stopLocalServiceDiscovery, startLocalServiceDiscovery, onLocalServiceResolveFail, onLocalServiceLost, onLocalServiceFound, onLocalServiceDiscoveryStop, offLocalServiceResolveFail, offLocalServiceLost, offLocalServiceFound, offLocalServiceDiscoveryStop, createUDPSocket, setStorageSync, setStorage, removeStorageSync, removeStorage, getStorageSync, getStorageInfoSync, getStorageInfo, getStorage, clearStorageSync, clearStorage, createMapContext, saveImageToPhotosAlbum, previewImage, previewMedia, getImageInfo, compressImage, chooseMessageFile, chooseImage, saveVideoToPhotosAlbum, createVideoContext, chooseVideo, chooseMedia, stopVoice, setInnerAudioOption, playVoice, pauseVoice, getAvailableAudioSources, createInnerAudioContext, createAudioContext, stopBackgroundAudio, seekBackgroundAudio, playBackgroundAudio, pauseBackgroundAudio, onBackgroundAudioStop, onBackgroundAudioPlay, onBackgroundAudioPause, getBackgroundAudioPlayerState, getBackgroundAudioManager, createLivePusherContext, createLivePlayerContext, stopRecord, startRecord, getRecorderManager, createCameraContext, stopLocationUpdate, startLocationUpdateBackground, startLocationUpdate, openLocation, onLocationChange, getLocation, chooseLocation, updateShareMenu, showShareMenu, hideShareMenu, getShareInfo, createOffscreenCanvas, createCanvasContext, canvasToTempFilePath, canvasPutImageData, canvasGetImageData, saveFile, removeSavedFile, openDocument, getSavedFileList, getSavedFileInfo, getFileSystemManager, getFileInfo, login, checkSession, navigateToMiniProgram, navigateBackMiniProgram, getAccountInfoSync, getUserInfo, reportMonitor, reportAnalytics, requestPayment, authorize, openSetting, getSetting, chooseAddress, openCard, addCard, chooseInvoiceTitle, chooseInvoice, startSoterAuthentication, checkIsSupportSoterAuthentication, checkIsSoterEnrolledInDevice, getWeRunData, stopBeaconDiscovery, startBeaconDiscovery, onBeaconUpdate, offBeaconUpdate, onBeaconServiceChange, offBeaconServiceChange, getBeacons, stopWifi, startWifi, setWifiList, onWifiConnected, offWifiConnected, onGetWifiList, offGetWifiList, getWifiList, getConnectedWifi, connectWifi, addPhoneContact, writeBLECharacteristicValue, readBLECharacteristicValue, onBLEConnectionStateChange, offBLEConnectionStateChange, onBLECharacteristicValueChange, offBLECharacteristicValueChange, notifyBLECharacteristicValueChange, getBLEDeviceServices, getBLEDeviceCharacteristics, createBLEConnection, closeBLEConnection, stopBluetoothDevicesDiscovery, startBluetoothDevicesDiscovery, openBluetoothAdapter, onBluetoothDeviceFound, offBluetoothDeviceFound, onBluetoothAdapterStateChange, offBluetoothAdapterStateChange, getConnectedBluetoothDevices, getBluetoothDevices, getBluetoothAdapterState, closeBluetoothAdapter, getBatteryInfoSync, getBatteryInfo, setClipboardData, getClipboardData, stopHCE, startHCE, sendHCEMessage, onHCEMessage, offHCEMessage, getHCEState, onNetworkStatusChange, offNetworkStatusChange, getNetworkType, setScreenBrightness, setKeepScreenOn, onUserCaptureScreen, offUserCaptureScreen, getScreenBrightness, makePhoneCall, stopAccelerometer, startAccelerometer, onAccelerometerChange, offAccelerometerChange, stopCompass, startCompass, onCompassChange, offCompassChange, stopDeviceMotionListening, startDeviceMotionListening, onDeviceMotionChange, offDeviceMotionChange, stopGyroscope, startGyroscope, onGyroscopeChange, offGyroscopeChange, onMemoryWarning, offMemoryWarning, scanCode, vibrateShort, vibrateLong, createWorker, getExtConfigSync, getExtConfig, createSelectorQuery, createIntersectionObserver, createRewardedVideoAd, createInterstitialAd, cloud, requestSubscribeMessage, hideHomeButton, getRealtimeLogManager, hideKeyboard, getUserProfile, showShareImageMenu, shareVideoMessage, shareFileMessage, onCopyUrl, offCopyUrl, authPrivateMessage, openCustomerServiceChat, getGroupEnterInfo, reserveChannelsLive, openChannelsLive, openChannelsActivity, getChannelsLiveNoticeInfo, getChannelsLiveInfo, chooseLicensePlate, shareToWeRun, showRedPackage, addVideoToFavorites, addFileToFavorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/wechat */ "./node_modules/@remax/wechat/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["MovableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["MovableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["CoverView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["CoverImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["PickerView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["PickerViewColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["LivePlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["LivePusher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["OpenData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["OfficialAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Audio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["FunctionalPageNavigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Camera"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatchMedia", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["MatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageContainer", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["PageContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShareElement", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["ShareElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardAccessory", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["KeyboardAccessory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoipRoom", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["VoipRoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdCustom", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["AdCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageMeta", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["PageMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationBar", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["NavigationBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["base64ToArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["arrayBufferToBase64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getLaunchOptionsSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onPageNotFound", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAudioInterruptionEnd", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppShow", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppHide", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offPageNotFound", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offError", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionEnd", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionBegin", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAudioInterruptionBegin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppShow", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppHide", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEnableDebug", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setEnableDebug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLogManager", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getLogManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showActionSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setNavigationBarTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarColor", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setNavigationBarColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setBackgroundTextStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setBackgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setTabBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setTabBarItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["removeTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["loadFontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTopBarText", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setTopBarText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonBoundingClientRect", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getMenuButtonBoundingClientRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWindowResize", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offWindowResize", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onKeyboardHeightChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onKeyboardHeightChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offKeyboardHeightChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offKeyboardHeightChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextRange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSelectedTextRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["sendSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["closeSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocalServiceDiscovery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocalServiceDiscovery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceResolveFail", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceLost", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceFound", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceDiscoveryStop", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceResolveFail", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceLost", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceFound", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceDiscoveryStop", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUDPSocket", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createUDPSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["removeStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["removeStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getStorageInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getStorageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["clearStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["clearStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createMapContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["saveImageToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewMedia", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["previewMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["compressImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseMessageFile", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseMessageFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["saveVideoToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseMedia", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopVoice", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInnerAudioOption", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setInnerAudioOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playVoice", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["playVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseVoice", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["pauseVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAvailableAudioSources", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getAvailableAudioSources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInnerAudioContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createInnerAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBackgroundAudio", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seekBackgroundAudio", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["seekBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playBackgroundAudio", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["playBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseBackgroundAudio", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["pauseBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioStop", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBackgroundAudioStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPlay", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBackgroundAudioPlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPause", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBackgroundAudioPause"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioPlayerState", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBackgroundAudioPlayerState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioManager", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBackgroundAudioManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePusherContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createLivePusherContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePlayerContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createLivePlayerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopRecord", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startRecord", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRecorderManager", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getRecorderManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCameraContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createCameraContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocationUpdate", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdateBackground", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startLocationUpdateBackground"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdate", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocationChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocationChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateShareMenu", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["updateShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShareInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getShareInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOffscreenCanvas", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createOffscreenCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasToTempFilePath", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["canvasToTempFilePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasPutImageData", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["canvasPutImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasGetImageData", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["canvasGetImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSavedFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getFileSystemManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["checkSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAccountInfoSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getAccountInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportMonitor", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["reportMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["requestPayment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["authorize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCard", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["addCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoiceTitle", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseInvoiceTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoice", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseInvoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startSoterAuthentication", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSupportSoterAuthentication", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["checkIsSupportSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSoterEnrolledInDevice", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["checkIsSoterEnrolledInDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeRunData", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getWeRunData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBeaconUpdate", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBeaconServiceChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBeacons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopWifi", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startWifi", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWifiList", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWifiConnected", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onWifiConnected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offWifiConnected", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offWifiConnected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGetWifiList", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onGetWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offGetWifiList", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offGetWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWifiList", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getConnectedWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectWifi", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["connectWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["addPhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["writeBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["readBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBLEConnectionStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLEConnectionStateChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offBLEConnectionStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLECharacteristicValueChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["notifyBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBLEDeviceServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBLEDeviceCharacteristics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBLEConnection", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBLEConnection", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["closeBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothDeviceFound", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothAdapterStateChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getConnectedBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBluetoothAdapterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["closeBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBatteryInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBatteryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopHCE", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startHCE", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendHCEMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["sendHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onHCEMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offHCEMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHCEState", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getHCEState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offNetworkStatusChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offUserCaptureScreen", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAccelerometerChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offCompassChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopDeviceMotionListening", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startDeviceMotionListening", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeviceMotionChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onDeviceMotionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offDeviceMotionChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offDeviceMotionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopGyroscope", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startGyroscope", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offGyroscopeChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offMemoryWarning", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["scanCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWorker", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getExtConfigSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getExtConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createRewardedVideoAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterstitialAd", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createInterstitialAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloud", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["cloud"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestSubscribeMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["requestSubscribeMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideHomeButton", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideHomeButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRealtimeLogManager", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getRealtimeLogManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideKeyboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserProfile", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getUserProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showShareImageMenu", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showShareImageMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shareVideoMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["shareVideoMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shareFileMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["shareFileMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCopyUrl", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onCopyUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offCopyUrl", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offCopyUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authPrivateMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["authPrivateMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCustomerServiceChat", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openCustomerServiceChat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGroupEnterInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getGroupEnterInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reserveChannelsLive", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["reserveChannelsLive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openChannelsLive", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openChannelsLive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openChannelsActivity", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openChannelsActivity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChannelsLiveNoticeInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getChannelsLiveNoticeInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChannelsLiveInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getChannelsLiveInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLicensePlate", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseLicensePlate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shareToWeRun", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["shareToWeRun"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showRedPackage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showRedPackage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addVideoToFavorites", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["addVideoToFavorites"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addFileToFavorites", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["addFileToFavorites"]; });



/***/ }),

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.css?modules":
/*!*******************************************!*\
  !*** ./src/pages/index/index.css?modules ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___2lhPP"};

/***/ }),

/***/ "./src/pages/index/index.entry.js":
/*!****************************************!*\
  !*** ./src/pages/index/index.entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/index/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index'));

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/index/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], null, count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onTap: function onTap() {
      return setCount(function (count) {
        return count + 1;
      });
    }
  }, "\u70B9\u6211+1"));
});

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./src/pages/index/index.entry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lruler/Desktop/clock/src/pages/index/index.entry.js */"./src/pages/index/index.entry.js");


/***/ })

},[[1,"runtime","remax-vendors"]]]);