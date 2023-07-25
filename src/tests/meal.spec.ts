import { fakeMeal, fakeMealItem } from '@/slices/meal/useCases/addMeal/AddMealUseCase.spec';
import app from '../app'
import request from 'supertest'
let server;
describe("e2e routes meal", () => {
  beforeAll(done => {
    server = app.listen(done)
  })
  afterAll(done => {
    server.close(done)
  })  

  describe('e2e test POST meal', () => {
    const userId = 'af633214-8dcf-44b1-9bf4-719c0d4e5a4f'
    // it('should successfully create meal', async () => {
    //   Reflect.deleteProperty(fakeMeal, 'id')
    //   Reflect.deleteProperty(fakeMealItem, 'id')
    //   Reflect.deleteProperty(fakeMealItem, 'mealId')
    //   const response = await request(server)
    //   .post('/meal/addMeal')
    //   .send({ meal: {...fakeMeal, userCreated: userId }, items: [{...fakeMealItem, foodId: 2}] })
    //   expect(response.statusCode).toBe(201)
    // })

    it('should return not found food error', async () => {
      const response = await request(server)
      .post('/meal/addMeal')
      .send({ meal: fakeMeal, items: [{...fakeMealItem, foodId: 999}] })
      expect(response.notFound).toBeTruthy()
      expect(response.statusCode).toBe(404)
      expect(JSON.parse(response.text).message).toBe("not found food")
    })
  })
})