const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'vitória Kauany',
        imagem: 'https://photos.app.goo.gl/3g8QH6mgZKK6DkGQ8',
        minibio: 'Sou artiste e adoro pintar'
    },
    {
        nome: 'Andriele Caroline',
        imagem: 'https://photos.app.goo.gl/7LWcJcXJUkpcqC5a9',
        minibio: 'Nadadora, artista e cozinheira'
    },
    {
        nome: 'Magda Maria',
        imagem: 'https://photos.app.goo.gl/YdNGRpEMNnB1cFKm6',
        minibio: 'Mãe, gosta de dançar, cozinhar e se cuidar'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)