const temaSalvo = localStorage.getItem('tema')

if (temaSalvo === 'claro') {
    document.body.classList.add('light-theme')
}

const menuContent = document.querySelector('.menu-content')

if (menuContent) {
    const themeButton = document.createElement('button')

    themeButton.type = 'button'
    themeButton.className = 'theme-toggle'
    themeButton.setAttribute('aria-label', 'Alternar tema')
    themeButton.setAttribute('title', 'Alternar tema')

    function atualizarIconeTema() {
        themeButton.textContent = document.body.classList.contains('light-theme')
            ? '☀️'
            : '🌙'
    }

    atualizarIconeTema()

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('light-theme')

        const temaAtual = document.body.classList.contains('light-theme')
            ? 'claro'
            : 'escuro'

        localStorage.setItem('tema', temaAtual)

        atualizarIconeTema()
    })

    menuContent.appendChild(themeButton)
}