import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/images/svg/vite.svg'
import { setupCounter } from './counter.js'
import { Hero } from './components/Hero.js'
import { menu } from './menu.js'


// document.addEventListener('DOMContentLoaded', () => {
//   const app = document.querySelector('#app');
//   if (!app) return;
//
//   // If this is the homepage:
//   // if (document.body.dataset.page === 'home') {
//   //   console.log('Homepage');
//   //   app.innerHTML = `
//   //     ${Hero({
//   //       title: 'Senior Software Engineer',
//   //       subtitle: 'Full-Stack Developer'
//   //     })}
//   //   `;
//   // }
// });

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn morezzz
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// const toggleBtn = document.getElementById('menuToggle');
// const overlayMenu = document.getElementById('overlayMenu');
//
// toggleBtn.addEventListener('click', () => {
//     const isOpen = overlayMenu.classList.contains('translate-x-0');
//
//     overlayMenu.classList.toggle('translate-x-0', !isOpen);
//     overlayMenu.classList.toggle('translate-x-full', isOpen);
// });

menu();
