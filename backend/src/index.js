// importantando dependencia
import express from  'express'
import cors from 'cors'

// Função de inicialização da aplicação

async function main () {
    const hostname = 'localhost'
    const port = 3000

    const app = express()

    app.use(express.json())
    app.use(cors())
    // req = requisição --- res = resposta
    app.get('/',(req,res) => {
        res.send({
            success: true,
            statuscode: 200,
            body: 'Bem-Vindo ao Gastronomia!'
        })
    })

    app.listen(port, () => {
        console.log (`Server running on: http://${hostname}: ${port}`)
    })
}
main()