const botaoMenu = document.querySelector('.menu-mobile');
const listaMenu = document.querySelector('.lista-navegacao');

function activeAccordion() {
    listaMenu.classList.toggle('active');
}

botaoMenu.addEventListener('click', activeAccordion);
