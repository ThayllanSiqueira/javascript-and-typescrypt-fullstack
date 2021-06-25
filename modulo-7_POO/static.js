class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume+=2;
    }
    diminuirVolume(){
        this.volume-=2;
    }
    static trocaPilha(){
        console.log('Ok, Vou trocar');
    }
}

const controle1 = new ControleRemoto('Sansung');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

const controle2 = new ControleRemoto('LG');
controle2.aumentarVolume();
console.log(controle2);

ControleRemoto.trocaPilha();

