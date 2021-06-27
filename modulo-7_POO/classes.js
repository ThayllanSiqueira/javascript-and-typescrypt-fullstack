class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando.`);
    }
    comer(){
        console.log(`${this.nome} está comento.`);
    }
    beber(){
        console.log(`${this.nome} está bebendo.`);
    }
}

const p1 = new Pessoa('Darlam', 'Felope');
console.log(p1);
p1.falar();