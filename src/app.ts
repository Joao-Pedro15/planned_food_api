import 'dotenv/config'
import './config/module-alias'
import { food, meal, user } from './routes/index'
import express from 'express'
import cors from 'cors'
import { Prisma } from './application/infra/database/prisma'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '@/docs'


const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get("/health", (request, response) => response.status(200).send('hello world'))

app.get('/teste', async (_, response) => {
  const teste = await Prisma.category.findMany()
  return response.status(200).json(teste)
})

app.use('/user', user.default)
app.use('/food', food.default)
app.use('/meal', meal.default)

export default app
