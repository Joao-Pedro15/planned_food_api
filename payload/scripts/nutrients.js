const { readFileSync } = require('fs')
const { PrismaClient } = require("@prisma/client")
const axios = require('axios')

const Prisma = new PrismaClient()
const PATH = './payload/csv/nutrients.csv'
const csv = readFileSync(PATH, 'utf8')


async function run() {
  const { data } = await axios.get('http://localhost:4000/rota')
  for(let item of data) {
    Reflect.deleteProperty(item, 'id')
    await Prisma.nutrient.create({
      data: {
        ...item
      }
    })
  }
  // let errors = []
  // for(const item of csv.split('\n')) {
  //   console.log(item)
  //   let [idAndCategory, ...name] = item.replace("\r", '').split(',"')
  //   let [id, categoryId] = idAndCategory.split(",")
  //   if(id != 'id') {
  //     if(!name[0]) {
  //       errors.push(id)
  //     }else{
  //       await Prisma.food.create({data: {
  //         name: name[0],
  //         categoryId: Number(categoryId),
  //       }})
  //     }
  //   }

  // console.log(errors)
  console.log('foi')
}

run()