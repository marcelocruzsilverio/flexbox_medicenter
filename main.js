document.addEventListener('DOMContentLoaded', function () {
    const menuMobile = document.querySelector('.menuMobile');
    const menu = document.querySelector('.menuDesktop')


    menuMobile.addEventListener('click', function () {
        menu.classList.toggle('display-none')
    })


})




