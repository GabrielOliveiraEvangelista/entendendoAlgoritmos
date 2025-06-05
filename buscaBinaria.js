/* 
Pesquisa binária consiste em um algoritmo que sempre vai dividindo ao uma lista ORDENADA ao meio e percorrendo
para direita ou esquerda dependendo do número que voce deseja encontrar. Para descobrir facilmente quantas etapas
são necessárias efetuar dada a quantidade de posições do array basta apenas fazer log de N na base 2, um array de
8 posições são necessária 3 tentativas (log de 8 na base 2 = 3)

Respostas dos exercícios:
1.1 = 7
1.2 = 8
*/

const arrayNumber = Array.from({ length: 8 }, (_, i) => i + 1);

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
  "Índice:" + buscaBinaria(arrayNumber, 8),
  "Tentativas erradas:" + tentativaB
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
  "Índice:" + buscaSimples(arrayNumber, 8),
  "Tentativas erradas:" + tentativaS
);
console.timeEnd("Busca Simples");
