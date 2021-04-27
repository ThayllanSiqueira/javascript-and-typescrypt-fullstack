const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('Olá Mundo');
});

app.get('/contato', (req, res)=> {
    res.send('Obrigado');
});

app.listen(3000, ()=>{
    console.log('running on port 3000');
    console.log('Acessar: http://localhost:3000');

});