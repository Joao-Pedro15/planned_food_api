import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { Prisma } from './application/infra/database/prisma'


const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/health", (request, response) => response.status(200).send('hello world'))

app.get('/teste', async (_, response) => {
  const teste = await Prisma.category.findMany()
  return response.status(200).json(teste)
})

export default app
