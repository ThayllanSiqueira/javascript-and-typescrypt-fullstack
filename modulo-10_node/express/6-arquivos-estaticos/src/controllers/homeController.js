exports.paginaInicial = (req, res)=> {
    /* res.send(`
    <form action="/" method="POST">
        NOME: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `); */
    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST');
}