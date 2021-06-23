//const data = new Date(); // Now
//const data = new Date(2021, 6, 7, 23, 17, 59); // ano , mes, dia, hora, min, seg, milis
/* const data = new Date('2021-06-07 23:20:50'); // '2021-06-07 23:20:50'
console.log(data);
console.log(data.toString());
console.log('Dia ', data.getDate());
console.log('Mês ', data.getMonth() + 1); // Começa do zero
console.log('Ano ', data.getFullYear());
console.log('Hora ', data.getHours());
console.log('Min ', data.getMinutes());
console.log('Seg ', data.getSeconds());
console.log('ms ', data.getMilliseconds());
console.log('Dia Semana ', data.getDay()); // 0 = Domingo, 6 = Sabado
console.log(Date.now()); // Milésimos de segundos */

function zeroAEsquerda(num){
  return num >= 10 ? num : `0${num}`;
}

function formataData(data){
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth());
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil); 