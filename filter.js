// Function to handle spamming
        (function() {
            const maxLoads = 14;
            const timeSpan = 1000; // 1 second in milliseconds
            const storageKey = 'pageLoadTimestamps';
            const now = Date.now();
            let timestamps = JSON.parse(localStorage.getItem(storageKey)) || [];
            timestamps.push(now);
            timestamps = timestamps.filter(timestamp => now - timestamp <= timeSpan);
            localStorage.setItem(storageKey, JSON.stringify(timestamps));
            if (timestamps.length > maxLoads) {
                window.location.href = '/blocked.1';
            }
        })();
