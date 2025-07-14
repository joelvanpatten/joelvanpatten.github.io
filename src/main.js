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

menu();
