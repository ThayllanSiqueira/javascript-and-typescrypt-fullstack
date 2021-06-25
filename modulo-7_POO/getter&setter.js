const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    get velocidade(){
        return this[_velocidade];
    }
    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Vectra');

/* 
for (let index = 0; index < 200; index++) {
    c1.acelerar();
}
 */
c1.velocidade = 1500; // error
//console.log(c1);

class Pessoa{
    #nome
    constructor(nome, sobrenome){
        this.#nome = nome;
        this.sobrenome = sobrenome
    }

    get nomeCompleto(){
        return thisnome + ' ' + this.sobrenome;
    }
}
const p1 = new Pessoa('Darlam', 'Felope');
p1.nome = 'Maria';
console.log(p1);
console.log(p1.nome);