// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
// console.log(links, navToggle);

navToggle.addEventListener('click', function() {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // }
    links.classList.toggle('show-links'); // el metodo toggle hace lo mismo que if else de arriba pero en solo una linea de codigo.
})