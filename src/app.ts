import 'dotenv/config'
import express from 'express'
import cors from 'cors'


const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/health", (request, response) => response.status(200).send('hello world'))

export default app
