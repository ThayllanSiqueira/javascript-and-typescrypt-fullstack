/* 
Object.values (Retorna os Valores)
Object.entries (Retorna chaves e valores como array)
Object.assign(des, any) (fazer copia de object)
Object.getOwnPropertyDescriptor(o, 'prop') (verificar as definições das propriedades)
... (spread) (Copiar object para outro)
Object.keys (Retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (Define várias propriedades)
Object.defineProperty (Define uma propriedade)
*/

// spread
/* 
const produto = { nome: 'Produto', preco: 1.8};
const caneca = {
    ...produto, //spread
    material: 'porcelana'
}
caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto, caneca); 
*/

// Object.assign(des, any)
/*
const produto = { nome: 'Produto', preco: 1.8};
const caneca = Object.assign({}, produto, {material: 'porcelana'});
caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto, caneca); 
*/

const produto = { nome: 'Produto', preco: 1.8};


// Object.keys (Retorna as chaves)
//console.log(Object.keys(produto));

//Object.freeze (congela o objeto)
/*
Object.freeze(produto);
produto.nome = 'Outro nome'; // Nâo funciona
console.log(produto); 
*/

/* //Object.getOwnPropertyDescriptor(o, 'prop')
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); */

// Object.values (Retorna os Valores)
/* console.log(Object.values(produto)); */

//Object.entries (Retorna chaves e valores como array)
console.log(Object.entries(produto));