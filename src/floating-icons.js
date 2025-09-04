// Placeholder for floating icons animation logic

document.addEventListener('DOMContentLoaded', () => {
  const iconContainer = document.getElementById('icon-bubbles-container');
  if (!iconContainer) return;

  const iconPath = '/images/svg/ColorIcons';

  const iconList = [
    'aws-icon.svg',
    'bootstrap-4-icon.svg',
    'css-icon.svg',
    'docker-icon.svg',
    'javascript-programming-language-icon.svg',
    'mysql-icon.svg',
    'node-js-black-icon.svg',
    'npm-icon.svg',
    'php-programming-language-icon.svg',
    'postman-icon.svg',
    'python-programming-language-icon.svg',
    'react-js-icon.svg',
    'typescript-programming-language-icon.svg',
    'webpack-icon.svg',
    'cursor-ai-code-icon.svg',
    'bitbucket-icon.svg',
    'c-sharp-programming-language-icon.svg',
    'git-icon.svg',
    'github-icon.svg',
    'jquery-icon.svg',
    'laravel-3d.svg',
    'mariadb-icon.svg',
    'redis-icon.svg',
    'sass-icon.svg',
    'tailwind-css-icon.svg',
    'visual-studio-code-icon.svg',
    'vue-js-icon.svg',
    'wordpress-icon.svg',
    'woocommerce-icon.svg'
  ];

  // const numberOfIcons = 14; // Fixed number of icons to create
  let iconsCreated = false; // Flag to ensure icons are only created once

  function createAndAnimateIcons() {
    if (iconsCreated) return; // Prevent re-creation

    for (let i = 0; i < iconList.length; i++) {
      const img = document.createElement('img');
      const randomIcon = iconList[i];
      img.src = `${iconPath}/${randomIcon}`;
      img.classList.add('bubble-icon'); // Start with opacity: 0

      // Randomize top position
      img.style.top = `${Math.random() * 50}vh`;

      // Randomize animation duration for floatAcross and floatUpDown
      const floatAcrossDuration = `30s`; // 10-30 seconds
      const floatUpDownDuration = `${Math.random() * 10 + 5}s`; // 5-15 seconds
      img.style.animationDuration = `${floatAcrossDuration}, ${floatUpDownDuration}`;

      // Randomize animation delay
      img.style.animationDelay = `${Math.random() * 30}s`; // 0-10 seconds delay

      iconContainer.appendChild(img);

      // Trigger fade-in animation after a short delay to ensure CSS is applied
      setTimeout(() => {
        img.classList.add('bubble-icon-visible');
      }, 100);
    }
    iconsCreated = true;
  }

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the container is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        createAndAnimateIcons();
        observer.unobserve(entry.target); // Stop observing once icons are created
      }
    });
  }, observerOptions);

  observer.observe(iconContainer);
});