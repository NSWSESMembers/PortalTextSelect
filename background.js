chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {allFrames: true, file: "contentscripts/portal.js"});
});
