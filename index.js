var express = require('express');
var app = express();

// Definindo o EJS como a View ENgine
app.set('view engine', 'ejs');

//  página principal
app.get('/', async function(req, res) {
    res.render('pages/index');
});

// listagem de pedidos
app.get('/pedidos', async function(req, res) {
    const data = await fetch('http://localhost:3000/pedidos', {method: 'GET'}).then((response) => response.json());

    res.render('pages/pedidos', {pedidos: data});
});

// formulário de novo pedido
app.get('/novoPedido', function(req, res) {
    res.render('pages/novo-pedido');
});

// pesquisa de pedidos por id
app.get('/pesquisarPedido', async function(req, res) {
    res.render('pages/pesquisar-pedido');
})

app.listen(8080);
console.log('Servidor rodando na porta 8080');