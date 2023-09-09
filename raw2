let counter = 5;
    const countdownElement = document.getElementById('counter');
    const logoElement = document.getElementById('logo');
    const background = document.querySelector('.background');

    // Count down from 5
    const intervalId = setInterval(() => {
      counter--;
      countdownElement.textContent = counter;

      if (counter <= 0) {
        clearInterval(intervalId);
        // Do something when countdown is finished
      }
    }, 1000);

    // Animation logic for logo
    const heartbeat = () => {
      logoElement.style.animation = 'heartbeat 1s ease-in-out';
    };

    const spin = () => {
      logoElement.style.animation = 'spin 1s linear infinite';
    };

    const animateLogo = () => {
      heartbeat();
      setTimeout(() => {
        spin();
      }, 1000);
    };

    // Initial animation
    animateLogo();

    // Repeat every 2 seconds (1s for heartbeat + 1s for spin)
    setInterval(animateLogo, 2000);

    // Generate random shapes in the background
    for (let i = 0; i < 50; i++) {
      const shape = document.createElement('div');
      const shapeType = ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)];
      shape.classList.add('shape', shapeType);
      shape.style.left = `${Math.random() * 100}vw`;
      shape.style.bottom = `${Math.random() * 100}vh`;
      shape.style.animationDuration = `${Math.random() * 3 + 2}s`;
      background.appendChild(shape);
    }
