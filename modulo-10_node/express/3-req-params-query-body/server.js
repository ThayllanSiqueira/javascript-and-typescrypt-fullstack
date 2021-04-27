const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=> {
    res.send(`
    <form action="/" method="POST">
        NOME: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res)=>{
    console.log(req.body);
    res.send("Recebi o form");
});

app.get('/contato', (req, res)=> {
    res.send('Obrigado');
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);

});

app.listen(3000, ()=>{
    console.log('running on port 3000');
    console.log('Acessar: http://localhost:3000');
});