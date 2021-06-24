//               -5       -4       -3         -2        -1
//                0        1        2          3         5
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//array.splice(indice atual, qtd delete, elem1, elem2, elem3);

//nomes.splice(4, 1);

//pop
/* const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos); */

//shift
/* const removidos = nomes.splice(0, 1);
console.log(nomes, removidos); */

// push
/* nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes); */

//unshift
nomes.splice(0, 0, 'Luiz');
console.log(nomes);

// Adiciona no indice
/* const removidos = nomes.splice(3, 0, 'Luiz');
console.log(nomes, removidos);
 */
// Remove e Adiciona elem no indice
/* const removidos = nomes.splice(3, 1, 'Luiz');
console.log(nomes, removidos); */