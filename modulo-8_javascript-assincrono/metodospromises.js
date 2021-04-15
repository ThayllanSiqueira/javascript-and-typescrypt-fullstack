function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('Error');
            return;
        }
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

//Promisse.all Promisse.race Promise.resolve Promise.reject
const promises = [
//    'Primeiro valor',
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi('Promise 3', rand(1,5)),
    //esperaAi(1000,1000),
//    'Outro Valor'
];

/* Promise.all(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
}); */

/* Promise.race(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
}); */
/* 
function baixaPagina(){
    const emCache = false;
    if(emCache){
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
} */
function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));

