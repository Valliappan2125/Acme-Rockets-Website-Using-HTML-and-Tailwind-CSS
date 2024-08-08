const initApp = () => {
    const hamburgerButton = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function toggleMenu(){
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }

    hamburgerButton.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);