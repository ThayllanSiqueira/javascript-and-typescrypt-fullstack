const express = require('express');
const app = express();
const router = require('./router.js');

app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(3000, ()=>{
    console.log('running on port 3000');
    console.log('Acessar: http://localhost:3000');
});