// Popup script - handles button clicks and interactions
document.addEventListener('DOMContentLoaded', () => {
    console.log('Popup script loaded');
    
    // Get button elements
    const openWebsiteBtn = document.getElementById('openWebsite');
    const viewGuideBtn = document.getElementById('viewGuide');
    
    // Open website button
    if (openWebsiteBtn) {
        openWebsiteBtn.addEventListener('click', () => {
            chrome.tabs.create({ 
                url: 'https://subsurfapps.com?utm_source=extension&utm_medium=popup&utm_campaign=visit_site'
            });
        });
    }
    
    // View guide button
    if (viewGuideBtn) {
        viewGuideBtn.addEventListener('click', () => {
            chrome.tabs.create({ 
                url: 'https://subsurfapps.com/complete-guide?utm_source=extension&utm_medium=popup&utm_campaign=full_guide'
            });
        });
    }
});

// Log extension information
console.log('Subway Surfers Extension Popup v1.0');
console.log('Extension helps players master the game!');
