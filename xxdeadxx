function getCookie(name) {
    let cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookiePair = cookieArray[i].split('=');
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

function checkIP() {
    const userIP = getCookie('instant-challengev1');
    const expectedIP = 'EXPECTED_IP_VALUE'; // This should be set by your server when setting the cookie

    if (userIP !== expectedIP) {
        window.location.href = '/x444instant-blockedx444';
    }
}

// Run the check
checkIP();
