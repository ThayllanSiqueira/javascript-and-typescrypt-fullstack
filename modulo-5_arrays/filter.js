const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retorne os números maiores que 10

/* let numM10 = [];
for (const num of numeros) {
  if(num > 10){
    numM10.push(num)
  }
}
console.log(numM10); */

/* Com Filter */

//Maneira mais longa
/* 
function callbackFilter(valor, indice, array){
  if(valor > 10){
    return true;
  } else {
    return false;
  }
} 
*/
/* 
function callbackFilter(valor){
  return valor > 10;
}
const numerosFiltrados = numeros.filter(callbackFilter);
*/

// Reduzida com função anonima
/* const numerosFiltrados = numeros.filter(function(valor){
  return valor > 10;
});
*/

// Com arow function
/* 
const numerosFiltrados = numeros.filter( valor => {
  return valor > 10;
}); 
*/

// Arrow function reduzida
/* const numerosFiltrados = numeros.filter( valor => valor > 10); 

console.log(numerosFiltrados);  */


/* ************************************************************** */
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
//const pessoasFiltradas = pessoas.filter(pessoa => pessoa.nome.length >= 5);
// Retorne as pessoas com mais de 50 anos
//const pessoasFiltradas = pessoas.filter(pessoa => pessoa.idade > 50);
// Retorne as pessoas cujo nome termina com a
const pessoasFiltradas = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));

console.log(pessoasFiltradas);