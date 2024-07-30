let laminas = 100;
let acessorios = {
  anel : 50,
  colar : 80,
}
let ataqCorpoACorpo = 50;

let ataqueArmado = ((Math.random() * (acessorios.anel + acessorios.colar) + ataqCorpoACorpo+ (laminas * 2))).toFixed(2);

let ataqueDesarmado = (Math.random() * (acessorios.anel + acessorios.colar) + ataqCorpoACorpo).toFixed(2);

function ataque(armado) {
  if (armado) {
    ((Math.random() * (acessorios.anel + acessorios.colar) + ataqCorpoACorpo+ (laminas * 2))).toFixed(2);
  } else {
    (Math.random() * (acessorios.anel + acessorios.colar) + ataqCorpoACorpo).toFixed(2);
  }
 }
 