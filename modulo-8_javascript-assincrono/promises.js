function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad Value')
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', rand(1,3));
}).then(() => {
    
    console.log("Esse é o segundo then");
}).then((resposta) => {
    console.log(resposta);
    console.log("Esse é o terceiro then");
}).then(()=>{
    console.log("Posso ter quantos thens eu quiser");
})
.then(() => {
    return esperaAi('Frase 3', rand(1,3));
})
.then((resposta) => {
    console.log(resposta);
    console.log("Mas só recebo a resposta apos o return da chamada da function");
})
.catch(e => {
    console.log(e);
});

console.log("Isso será printado antes das Promisses");