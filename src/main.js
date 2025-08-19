import './style.css'
import { menu } from './menu.js'
import { marked } from 'marked'

// Markdown renderer function
async function renderMarkdown(markdownPath, targetElementId) {
  try {
    const response = await fetch(markdownPath);
    if (!response.ok) {
      throw new Error(`Failed to load markdown: ${response.statusText}`);
    }
    
    const markdownText = await response.text();
    const htmlContent = marked(markdownText);
    
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.innerHTML = htmlContent;
    }
  } catch (error) {
    console.error('Error rendering markdown:', error);
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.innerHTML = '<p class="text-red-500">Error loading markdown content</p>';
    }
  }
}

// Initialize markdown rendering when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Render StudyBuddy README if the element exists
  const studyBuddyElement = document.getElementById('studybuddy-markdown');
  if (studyBuddyElement) {
    renderMarkdown('/markdown/StudyBuddyReadme.md', 'studybuddy-markdown');
  }

  const iconContainer = document.getElementById('icon-container');
  if (iconContainer) {
    const icons = [
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

    icons.forEach(iconFile => {
      const img = document.createElement('img');
      img.src = `/images/svg/ColorIcons/${iconFile}`;
      img.alt = iconFile.replace('.svg', '').replace(/-/g, ' ');
      img.classList.add('h-12', 'w-12'); // Example size, can be adjusted
      iconContainer.appendChild(img);
    });
  }
});

menu();
