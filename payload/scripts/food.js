const { readFileSync } = require('fs')
const { PrismaClient } = require("@prisma/client")

const Prisma = new PrismaClient()
const PATH = './payload/csv/food.csv'
const csv = readFileSync(PATH, 'utf8')


async function run() {
  let errors = []
  for(const item of csv.split('\n')) {
    let [idAndCategory, ...name] = item.replace("\r", '').split(',"')
    let [id, categoryId] = idAndCategory.split(",")
    if(id != 'id') {
      if(!name[0]) {
        errors.push(id)
      }else{
        await Prisma.food.create({data: {
          name: name[0],
          categoryId: Number(categoryId),
        }})
      }
    }
  }
  console.log(errors)
}

run()