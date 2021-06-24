// Combinação das 3 funções

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)

//Etapas
const numerosPares = numeros.filter(valor => valor % 2 === 0);
const dobroPares = numerosPares.map(valor => valor * 2);
const somaDobroPares = dobroPares.reduce((acumulador, valor) =>{
  return acumulador += valor;
}, 0);
/* console.log(numerosPares);
console.log(dobroPares);
console.log(somaDobroPares); */

// Tudo junto
const total = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador += valor, 0);
console.log(total);
