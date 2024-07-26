function apresentandoAlguem(){
    let nome = "Bruno";
    function saudacao(){
        console.log(`Olá, ${nome}`);
    }
    function despedida(){
        console.log(`Até mais, ${nome}`);
    }
    return {
        saudacao: saudacao,
        despedida: despedida
    }
}

const pessoa = apresentandoAlguem();

pessoa.saudacao();