// For Clpassico - Geralmente com iteráveis (array ou Strings)
// For in - Retorna o índice ou chave (array, string ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)


/* const nomes = ['Thayllan', 'Vivi', 'Graxinha'];

for (let index = 0; index < nomes.length; index++) {
  console.log(nomes[index]);
}
console.log('-----------------');

for(let key in nomes){
  console.log(nomes[key]);
}

console.log('-----------------');

for(let value of nomes){
  console.log(value);
}

console.log('-----------------');

nomes.forEach(function(valor, indice, array){
  console.log(valor, indice, array);
}); */

const pessoa = {
  nome: 'Thayllan',
  sobrenome: 'Siqueira'
}

for (let key in pessoa){
  console.log(key, pessoa[key]);
}

//Error
/* for(let value of pessoa){
  console.log(value);
} */ 
