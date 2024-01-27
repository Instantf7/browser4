(function() {
    // Store the initial load time
    const initialLoadTime = localStorage.getItem('initialLoadTime');

    // Check if the initial load time is set and if the current time is more than 6 seconds from the initial load time
    if (initialLoadTime && (new Date().getTime() - initialLoadTime) > 7000) {
        // Redirect if the page is refreshed after 6 seconds
        window.location.href = '/x444instant-blockedx444';
    } else {
        // Set the initial load time if not set
        localStorage.setItem('initialLoadTime', new Date().getTime());
    }

    // Clear the stored time on page unload so it resets on navigation to a new page
    window.addEventListener('beforeunload', function() {
        localStorage.removeItem('initialLoadTime');
    });
})();
