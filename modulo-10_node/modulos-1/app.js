//const mod1 = require('./mod1');
//const falaNome = require('./mod1').falaNome;
//const {nome, sobrenome, falaNome} = require('./mod1');

const path = require('path');
const axios = require('axios');
const {Pessoa} = require('./mod1');
const mod1 = require('./mod1');
const p1 = new Pessoa('Darlama');
console.log(p1);