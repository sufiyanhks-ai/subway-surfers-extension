// Content script - runs on web pages
console.log('Subway Surfers Extension content script loaded');

// Detect if user is on a gaming site
const gamingSites = [
    'play.google.com',
    'apps.apple.com',
    'kongregate.com',
    'miniclip.com',
    'pogo.com',
    'facebook.com',
    'twitch.tv'
];

// Check current page
window.addEventListener('load', () => {
    const hostname = window.location.hostname;
    const isGamingSite = gamingSites.some(site => hostname.includes(site));
    
    if (isGamingSite) {
        console.log('🎮 Gaming site detected! Subway Surfers extension ready to help.');
    }
});

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'checkPage') {
        const pageInfo = {
            url: window.location.href,
            title: document.title,
            isGamingSite: gamingSites.some(site => 
                window.location.hostname.includes(site)
            )
        };
        sendResponse(pageInfo);
    }
});

// Monitor for game-related keywords on page
document.addEventListener('DOMContentLoaded', () => {
    const pageText = document.body.innerText.toLowerCase();
    if (pageText.includes('subway') || pageText.includes('surfers') || pageText.includes('game')) {
        console.log('Game-related content detected on this page');
    }
});
