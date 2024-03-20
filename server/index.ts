import Fastify from "fastify"
import WeatherRouter from "./src/routes/WeatherRouter"
import dotenv from 'dotenv'
import cors from '@fastify/cors'

dotenv.config()

const app = Fastify()

app.register(cors)

app.register(WeatherRouter, { prefix: '/weather' })

async function startApp() {
    try {
        app.listen({ port: Number(process.env.PORT) }, (err, addr) => {
            if (err) {
                console.log(err)
            }
        })
    } catch(e) {
        console.log(e)
    }
}

startApp()