import express from 'express';

const host = '0.0.0.0';

const porta = 3000;
const app = express();

app.use(express.static('./publico'));
app.use(express.static('./privado'));

app.get('/login',(requisicao,resposta) => {resposta.redirect('/login.html');
    
});

app.post('/login',(requisicao,resposta) => {});


app.listen(porta,host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});