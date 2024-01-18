import { Express, json, urlencoded } from "express";
import { allRoutes } from '@/routes/index'
import cors from 'cors'

export function expressConfig(app:Express) {
  app.use(json())
  app.use(urlencoded({ extended: true }))
  app.use(cors())

  Object.keys(allRoutes).forEach((route) => {

    app.use(`/${route}`, allRoutes[route])

  })

}