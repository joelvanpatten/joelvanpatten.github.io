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
    'webpack-icon.svg'
  ];

  const numberOfIcons = 14; // Fixed number of icons to create

  function createAndAnimateIcons() {
    for (let i = 0; i < numberOfIcons; i++) {
      const img = document.createElement('img');
      // const randomIcon = iconList[Math.floor(Math.random() * iconList.length)];
      const randomIcon = iconList[i];
      img.src = `${iconPath}/${randomIcon}`;
      img.classList.add('bubble-icon');

      // Randomize top position
      img.style.top = `${Math.random() * 50}vh`;

      // Randomize animation duration for floatAcross and floatUpDown
      // const floatAcrossDuration = `${Math.random() * 20 + 10}s`; // 10-30 seconds
      const floatAcrossDuration = `30s`; // 10-30 seconds
      const floatUpDownDuration = `${Math.random() * 10 + 5}s`; // 5-15 seconds
      img.style.animationDuration = `${floatAcrossDuration}, ${floatUpDownDuration}`;

      // Randomize animation delay
      img.style.animationDelay = `${Math.random() * 30}s`; // 0-10 seconds delay

      iconContainer.appendChild(img);
    }
  }

  createAndAnimateIcons();
});