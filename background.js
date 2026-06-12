// Background service worker
console.log('Subway Surfers Extension background loaded');

// Listen for extension installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Extension installed');
    // Open website on install
    chrome.tabs.create({ url: 'https://subsurfapps.com?source=extension' });
  } else if (details.reason === 'update') {
    console.log('Extension updated to version', chrome.runtime.getManifest().version);
  }
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getExtensionInfo') {
    const info = {
      name: chrome.runtime.getManifest().name,
      version: chrome.runtime.getManifest().version
    };
    sendResponse(info);
  }
});
