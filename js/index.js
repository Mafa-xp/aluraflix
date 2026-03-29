document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profiles .profile');

    profileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const img = link.querySelector('img');
            const caption = link.querySelector('figcaption');

            if (img && caption) {
                localStorage.setItem('perfilAtivoNome', caption.textContent.trim());
                localStorage.setItem('perfilAtivoImagem', img.src);
            }
        });
    });
});