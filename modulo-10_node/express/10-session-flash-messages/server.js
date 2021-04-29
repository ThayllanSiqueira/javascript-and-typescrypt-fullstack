require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Conectei a base de dados');
        app.emit('pronto');
    }).catch(err => console.log(err));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const router = require('./router.js');
const path = require('path');
const {middlewareGlobal, outroMiddleware} = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'açsldkfjhguhgalsh   asjdflkdf queir asldkh jaçslkdg ajsl()',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Nossos middlewares
app.use(middlewareGlobal);
app.use(router);

app.on('pronto', () => {
    app.listen(3000, ()=>{
        console.log('running on port 3000');
        console.log('Acessar: http://localhost:3000');
    });
})
