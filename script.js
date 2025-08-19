document.addEventListener("DOMContentLoaded", () => {
    console.log("Portafolio cargado correctamente");

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // Si es .html, deja que navegue normalmente
        });
    });
});