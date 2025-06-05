const arrayNumber = Array.from({ length: 2000000 }, (_, i) => i + 1); // array de dois milhões de posições

console.time("Busca Binária");
let tentativaB = -1;
function buscaBinaria(array, item) {
  let baixo = 0;
  let alto = array.length - 1;
  while (baixo <= alto) {
    tentativaB++;
    let meio = Math.floor((baixo + alto) / 2);
    let chute = array[meio];
    if (chute === item) {
      return meio;
    }
    if (chute > item) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }
  tentativaB++;
  return "Número não encontrado";
}
console.log(
  "Índice:" + buscaBinaria(arrayNumber, 2000000),"Tentativas erradas:" + tentativaB
);
console.timeEnd("Busca Binária");

console.time("Busca Simples");
let tentativaS = -1;
function buscaSimples(array, item) {
  for (let index = 0; index < array.length; index++) {
    tentativaS++;
    if (array[index] === item) {
      return index;
    }
  }
  tentativaS++;
  return "Número não encontrado";
}
console.log(
  "Índice:" + buscaSimples(arrayNumber, 2000000),"Tentativas erradas:" + tentativaS
);
console.timeEnd("Busca Simples");
