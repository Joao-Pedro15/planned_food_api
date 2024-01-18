import 'dotenv/config'
import './config/module-alias'
import express from 'express'
import { expressConfig } from '@/config/express-config'

const app = express()

expressConfig(app)

app.get("/health", (request, response) => response.status(200).send('hello world'))


export default app
