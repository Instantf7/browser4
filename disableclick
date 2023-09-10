 // Disable right-click
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });

    // Disable copy and paste
    document.addEventListener('copy', function(e) {
      e.preventDefault();
    });

    // Disable certain keys
    document.addEventListener('keydown', function(e) {
      // Disable Ctrl (or Cmd in Mac) + C (copy), Ctrl + V (paste), Ctrl + U (view source), Ctrl + Shift + I (dev tools)
      const forbiddenKeys = ['c', 'v', 'u', 'i'];
      if ((e.ctrlKey || e.metaKey) && forbiddenKeys.includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      
      // Disable F12 (dev tools)
      if (e.keyCode === 123) {
        e.preventDefault();
      }
    });
