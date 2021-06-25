class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já está ligado');
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(this.nome + ' já está desligado');
            return;
        }
        this.ligado = false;
    }
    
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const dispositivo = new DispositivoEletronico('Smartphone');
console.log(dispositivo);

const smartphone = new Smartphone('Motorola', 'Preto', 'Moto G8 Plus');
console.log(smartphone);