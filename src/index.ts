import 'dotenv/config'
import './config/module-alias'
import express from 'express'
//import { expressConfig } from './config/express-config'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/health", (request, response) => response.status(200).send('hello world'))


app.listen(3000, () => {
  console.log('server running in port 3000')
})


// export default app
