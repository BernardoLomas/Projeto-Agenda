//Importação do Express, Routes, views, caminho absoluto
const express = require('express');
const app = express();
const routes = require('./routes');
app.use(routes);
const path = require('path');
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extend: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

//===================================================//

app.get('/', (req,res) => {
    res.send(console.log('Olá mundo!'));
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    console.log('Acessar http://localhost:3000')
})