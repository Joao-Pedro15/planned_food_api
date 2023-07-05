const { readFileSync } = require('fs')
const { PrismaClient } = require("@prisma/client")

const Prisma = new PrismaClient()
const PATH = './payload/csv/categories.csv'
const csv = readFileSync(PATH, 'utf8')


async function run() {
  for(const item of csv.split('\n')) {
    const name = item.split(',')[1].replace('\r', '')
    if(name != 'name') {
      await Prisma.category.create({ data: { name } })
    } 
  }
}

run()