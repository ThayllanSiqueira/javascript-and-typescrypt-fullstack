const express = require('express');
const app = express();
const router = require('./router.js');
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(router);

app.listen(3000, ()=>{
    console.log('running on port 3000');
    console.log('Acessar: http://localhost:3000');
});