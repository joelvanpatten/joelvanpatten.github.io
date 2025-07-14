export function menu() {
    const toggleBtn = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('closeIcon');

    function openMenu() {
        sideMenu.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }

    function closeMenu() {
        sideMenu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }

    toggleBtn.addEventListener('click', () => {
        const isOpen = !sideMenu.classList.contains('-translate-x-full');
        isOpen ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
}