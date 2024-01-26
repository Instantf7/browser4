// Function to read a cookie's value
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// Function to perform the check and redirect
function checkAndRedirect() {
    const expectedValue = "YourExpectedValueHere"; // Replace with the value you expect
    const actualValue = getCookie('instant-challengev1');

    if (actualValue !== expectedValue) {
        // Redirect if the values do not match
        window.location.href = '/x444instant-blockedx444';
    }
}

// Wait for 6 seconds before performing the check
setTimeout(checkAndRedirect, 7000);
