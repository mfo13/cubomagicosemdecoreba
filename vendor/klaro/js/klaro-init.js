// js próprio, inicia o klaro e abre sempre que o usuário clicar em cookies-settings no rodapé
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', event => {
        const link = event.target.closest('#cookies-settings');
        if (!link)
            return;
        event.preventDefault();
        klaro.show();
    });
});