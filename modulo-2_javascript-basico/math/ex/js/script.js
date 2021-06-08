const numero = Number(prompt('Digite um número: '));
document.getElementById('numero-titulo').innerHTML = numero;
const texto = document.getElementById('texto');
texto.innerHTML = `
<p>Raiz quadrada: ${numero ** 0.5}.</p> 
<p>${numero} é inteiro?: ${Number.isInteger(numero)}.</p> 
<p>É NaN: ${Number.isNaN(numero)}.</p> 
<p>Arredondado para baixo: ${Math.floor(numero)}.</p> 
<p>Arredondado para cima: ${Math.ceil(numero)}.</p> 
<p>Com duas casas decimais: ${numero.toFixed(2)}.</p> 
`;

