document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    // Tenta pegar todos os ícones sociais que podem precisar de ajuste no tema escuro
    const socialIcons = document.querySelectorAll('.social-icon');

    // Função para aplicar o tema e ajustar ícones
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            themeToggleButton.textContent = '☀️'; // Ícone de Sol
            // Aplica um filtro para ícones de imagem no tema escuro, se necessário
            socialIcons.forEach(icon => {
                if (icon.tagName === 'IMG') { // Aplica filtro apenas a <img>
                    icon.classList.add('dark-theme-social-icon-filter');
                }
            });
        } else {
            body.classList.remove('dark-theme');
            themeToggleButton.textContent = '🌙'; // Ícone de Lua
            socialIcons.forEach(icon => {
                if (icon.tagName === 'IMG') {
                    icon.classList.remove('dark-theme-social-icon-filter');
                }
            });
        }
    }

    // Carregar tema salvo do localStorage ou usar o padrão do sistema (se suportado)
    // Ou padrão para 'light' se nenhuma preferência for encontrada.
    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
        // (Opcional) Detectar preferência do sistema
        // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //     currentTheme = 'dark';
        // } else {
        //     currentTheme = 'light';
        // }
        currentTheme = 'light'; // Padrão para claro se não quiser detectar o sistema
    }

    applyTheme(currentTheme);

    // Evento do botão para alternar o tema
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            let newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // (Opcional) Ouvir mudanças na preferência do sistema
    // if (window.matchMedia) {
    //     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    //         const newColorScheme = e.matches ? 'dark' : 'light';
    //         applyTheme(newColorScheme);
    //         localStorage.setItem('theme', newColorScheme);
    //     });
    // }
});