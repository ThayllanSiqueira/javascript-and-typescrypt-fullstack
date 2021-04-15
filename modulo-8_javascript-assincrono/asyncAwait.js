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

//Promise
/* esperaAi('Promise 1', rand(1,5)).then(valor => {
    console.log(valor);
    return esperaAi('Promise 2', rand(1,5));
}).then(valor => {
    console.log(valor);
    return esperaAi('Promise 3', rand(1,5));
}).then(valor => {
    console.log(valor);
})
.catch(err => console.log(err)); */

//Async / Await
async function exec(){
    try {
        const fase1 =  esperaAi('Promise 1', 1000);
        console.log(fase1);

        setTimeout(() => {
            console.log("Promise pending = " , fase1);
        }, 1100);

        const fase2 = await esperaAi('Promise 2', rand(1,5));
        console.log(fase2);
        
        const fase3 = await esperaAi('Promise 3', rand(1,5));
        console.log(fase3);

        console.log('Terminamos');
    } catch (error) {
        console.log(error);
    }
}

exec();