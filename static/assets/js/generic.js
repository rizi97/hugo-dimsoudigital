$(document).ready(function () {
    // Navbar Toggle 

    const button = document.querySelector('#menu-button');
    const menu = document.querySelector('#menu');
    const header = document.querySelector('.header');


    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        button.classList.toggle('checked');
        header.classList.toggle('open');
    });

});
