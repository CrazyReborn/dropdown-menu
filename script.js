const showMenu = (() => {
    document.querySelector("#menu-main").addEventListener('click', e => {
        document.querySelector('ul').classList.toggle('show-menu');
    })
})();