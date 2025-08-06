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
});

menu();
