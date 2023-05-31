const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(resquest, response){
    response.json({
        nome: 'Vitória Kauany',
        imagem: 'https://photos.app.goo.gl/3g8QH6mgZKK6DkGQ8',
        minibio: 'Sou artista e adoro pintar'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)