// For in => lê os indices ou chaves do objeto

//const fruits = ['Pera', 'Maçã', 'Uva'];

/* for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
} */

/* for (let index in fruits){
  console.log(fruits[index]);
} */

const pessoa ={
  nome: 'Thayllan',
  sobrenome: 'Siqueira',
  idade: 27
}

//consoe.log(pessoa.nome);
//console.log(pessoa['nome']);

for (let chave in pessoa){
  console.log(`${chave}: ${pessoa[chave]}`);
}