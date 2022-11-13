const express = require('express');
const server = express();
const names = require('./src/data/names.json');

server.get('/teste', (req, res) => {
    return res.json(names);
})

server.listen(3000, () => {
    console.log('Servidor rodando');
});
