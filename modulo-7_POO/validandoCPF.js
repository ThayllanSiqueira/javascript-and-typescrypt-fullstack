class ValidaCPF{
    constructor(cpf){
        this.cpfLimpo = cpf.replace(/\D+/g, '');
    }
    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        return cpfSemDigitos + digito1 + digito2
    }
    geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
        for (const stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        console.log(digito)
        return digito <= 9 ? String(digito) : '0';
    }
    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string')return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        return this.geraNovoCpf() === this.cpfLimpo
    }
    isValid(){
        if(this.valida()){
            return 'CPF Válido';
        } else {
            return 'CPF Inválido';
        }
    }
}

const validacpf = new ValidaCPF('041.021.691-72');
//const validacpf = new ValidaCPF('888.888.888-88');
console.log(validacpf.isValid());