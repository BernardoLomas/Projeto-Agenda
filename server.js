//Importação do Express, Routes, views, caminho absoluto
const express = require('express');
const app = express();
const routes = require('./routes');
app.use(routes);
const path = require('path');
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
require('dotenv').config();

//Conexão com banco de dados
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('MongoDB conectado!');
        app.emit('pronto!');
    })
    .catch (erro => console.error('Erro ao conectar no MongoDB:', erro));


app.get('/', (req, res) => {
    res.send('Olá mundo!');
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    console.log('Acessar http://localhost:3000')
})