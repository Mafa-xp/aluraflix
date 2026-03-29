// Função para alternar entre dark e light mode
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    body.classList.toggle('light-mode');
    // Salva preferência no localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        btn.innerHTML = '🌙'; // Lua para modo claro
    } else {
        localStorage.setItem('theme', 'dark');
        btn.innerHTML = '☀️'; // Sol para modo escuro
    }
}

// Aplica o tema salvo ao carregar a página
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('theme-toggle');

    if (!btn) return;

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        btn.innerHTML = '🌙';
    } else {
        document.body.classList.remove('light-mode');
        btn.innerHTML = '☀️';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('theme-toggle');
    applySavedTheme();
    if (btn) {
        btn.addEventListener('click', toggleTheme);
    }
});