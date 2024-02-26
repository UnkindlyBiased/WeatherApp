import Fastify from "fastify"
import WeatherRouter from "./src/routes/WeatherRouter"
import dotenv from 'dotenv'

dotenv.config()

const app = Fastify()

app.register(WeatherRouter, { prefix: '/weather' })

async function startApp() {
    app.listen({ port: Number(process.env.PORT) }, (err, addr) => {
        if (err) {
            console.log(err)
        }
    })
}

startApp()