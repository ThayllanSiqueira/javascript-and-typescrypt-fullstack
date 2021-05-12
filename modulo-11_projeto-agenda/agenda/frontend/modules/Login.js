import validator from 'validator';

export default class {
    constructor(formClass){
        this.form = document.querySelector(formClass);
        return true;
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');

        if(!validator.isEmail(emailInput.value)){
            alert('Email inválido');
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            alert('Password precisa ter de 3 a 50 caracteres');
            error = true;
        }

        if(!error) el.submit();

    }
}