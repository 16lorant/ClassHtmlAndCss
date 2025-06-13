document.querySelectorAll('.menu').forEach(menu => {
    const boton = menu.querySelector('.menu-boton');
    const opciones = menu.querySelector('.menu-opciones');

    // Toggle de este menú
    boton.addEventListener('click', (e) => {
        e.stopPropagation();
        cerrarTodosLosMenus(); // cierra otros
        opciones.classList.toggle('show');
    });

    // Cerrar menú si se hace clic en una opción
    opciones.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
        opciones.classList.remove('show');
        });
    });
    });

    // Cierra todos los menús al hacer clic fuera
    document.addEventListener('click', () => {
    cerrarTodosLosMenus();
    });

    function cerrarTodosLosMenus() {
    document.querySelectorAll('.menu-opciones').forEach(menu => {
        menu.classList.remove('show');
    });
}