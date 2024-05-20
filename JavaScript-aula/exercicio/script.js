
const form = document.querySelector('#form');
let campoA = document.querySelector('input#campoA');
let campoB = document.querySelector('input#campoB'); 

// Primeiro pegar o evento do click
form.addEventListener('submit'), function(e) {
    e.preventDefault()
    console.log('clicou');
} 

console.log(form);