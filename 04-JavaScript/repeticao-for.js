let nomes = ['Maria', 'José', 'João'];

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

let saudacoes = 0;

while (saudacoes < nomes.length){
    console.log(`O nome é ${nomes[saudacoes]}`);
    saudacoes++;
}