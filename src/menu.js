export function menu() {
    const toggleBtn = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('closeIcon');
    const backToTopBtn = document.getElementById('backToTopBtn');

    function openMenu() {
        sideMenu.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        toggleBtn.classList.add('menu-open');
    }

    function closeMenu() {
        sideMenu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        toggleBtn.classList.remove('menu-open');
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

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}