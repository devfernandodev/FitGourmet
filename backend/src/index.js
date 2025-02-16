// importantando dependencia
import express from  'express'
import cors from 'cors'
import { Mongo } from './database/mongo.js' 
import {config}  from 'dotenv'

config()

// Função de inicialização da aplicação

async function main () {
    const hostname = 'localhost'
    const port = 3000

    const app = express()

    const mongoConnection = await Mongo.connect({mongoConnectionString: process.env.MONGO_CS, mongoDbName: process.env.MONGO_DB_NAME})
    console.log(mongoConnection)
    app.use(express.json())
    app.use(cors())
    // req = requisição --- res = resposta
    app.get('/',(req,res) => {
        res.send({
            success: true,
            statuscode: 200,
            body: 'Bem-Vindo ao FitGoumert!'
        })
    })

    app.listen(port, () => {
        console.log (`Server running on: http://${hostname}: ${port}`)
    })
}
main()