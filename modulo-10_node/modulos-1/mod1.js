/* const nome = 'Darlam';
const sobrenome = 'Felope';

const falaNome = () => {
    console.log(nome, sobrenome);
}
 */
/* module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

console.log(module); */

/* exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquercoisa = 'Tudo que eu escrevo';

console.log(module); */

const nome = 'Darlam';
const sobrenome = 'Miranda';

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}

exports.exports = {
    nome, sobrenome, Pessoa
}

