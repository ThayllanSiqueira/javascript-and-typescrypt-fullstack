/* const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// dobre os números
const numerosAlterado = numeros.map(numero =>  numero * 2);
console.log(numeros);
console.log(numerosAlterado); */

/* ***************************************************************** */

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

// Retorne apenas um string com o nome da pessoa
const nomes = pessoas.map(pessoa => pessoa.nome);
//console.log(nomes);

// Remova apenas a chave "nome" do objeto
/* const idades = pessoas.map(pessoa => {
  delete pessoa.nome;
  return pessoa
}); */
const idades = pessoas.map(pessoa => ({ idade: pessoa.idade }));
//console.log(idades);

// Adicione uma chave id em cada objeto
const comIds = pessoas.map((pessoa, indice) => {
  const newPessoa = { ... pessoa };
  newPessoa.id = indice + 1;
  return newPessoa;
});
//console.log(comIds);
console.log(pessoas);

