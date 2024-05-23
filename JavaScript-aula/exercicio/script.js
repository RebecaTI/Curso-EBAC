
const form = document.querySelector('#form');
let campoA = document.querySelector('input#campoA');
let campoB = document.querySelector('input#campoB'); 
let result = document.getElementById('result');

form.addEventListener('submit', e => {
    e.preventDefault()
    
    addTexto(analisaNumeros());
    limpaCampos();
}) 

function analisaNumeros(){
    const campoAMaior = `<b>${campoA.value}</b> é maior que ${campoB.value}`;
    const campoBMaior = `<b>${campoB.value}</b> é maior que ${campoA.value}`;
    const camposDeMesmoValor = `<b>${campoA.value}</b> e <b>${campoB.value}</b> tem o mesmo valor`;

    if(campoA.value > campoB.value){
        return campoAMaior;
    } else if (campoA.value < campoB.value){
        return campoBMaior;
    } else {
        return camposDeMesmoValor;
    }

    //Operador ternário com apenas 2 condições
    //campoA.value > campoB.value ? console.log(campoAMaior) : console.log(campoBMaior);
}

function addTexto(resultado) {
    result.style.display='block';
    result.innerHTML = resultado;
}

function limpaCampos(){
    campoA.value = '';
    campoB.value = '';
}



