const a1 = [10,20,30,40,50,60,70,80,90];

// for of
for (const valor of a1) {
  //console.log(valor);
}

a1.forEach((valor, indice, array) => {
  //console.log(indice, valor, array);
  console.log(array[indice])
});