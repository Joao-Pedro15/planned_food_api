import { fakeUser } from '@/slices/user/useCases/addUser/AddUserUseCase.spec'
import app from '../app'
import request from 'supertest'
let server;

describe('e2e routes from user', () => {
  beforeAll(done => {
    server = app.listen(done)
  })
  afterAll(done => {
    server.close(done)
  })

  describe('e2e test POST user', () => {
    test("should return error email already in database", async () => {
      Reflect.deleteProperty(fakeUser, 'id')
      const response = await request(server)
      .post("/user/addUser")
      .send(fakeUser)
      expect(response.notFound).toBeTruthy()
      expect(response.status).toBe(404)
      expect(JSON.parse(response.text).message).toBe('not found user')
    })
  })

  describe('e2e test GET user', () => {
    test('should return user get by id successfully', async () => {
      const response = await request(server)
      .get(`/user/getUser/${'af633214-8dcf-44b1-9bf4-719c0d4e5a4f'}`)
      expect(response.body).toHaveProperty('email')
      expect(response.status).toBe(200)
    })

    test("should return error not found user in database",  async () => {
      const response = await request(server)
      .get(`/user/getUser/${fakeUser.id}`)
      expect(response.notFound).toBeTruthy()
      expect(response.status).toBe(404)
      expect(JSON.parse(response.text).message).toBe('not found user')
    })
  })

  describe("e2e test LOGIN route", () => {
    test('should return token in login successfully', async () => {
      const response = await request(server)
      .post('/user/login')
      .send(fakeUser)
      expect(response.status).toBe(200)
    })
    test('should return error in login not found email', async () => {
      const response = await request(server)
      .post('/user/login')
      .send({...fakeUser, email: 'emailNotExist@gmail.com'})
      expect(response.notFound).toBeTruthy()
      expect(response.status).toBe(404)
      expect(JSON.parse(response.text).message).toBe('not found user by email emailNotExist@gmail.com')
    })
    test('should return error in login password incorrect', async () => {
      const response = await request(server)
      .post('/user/login')
      .send({...fakeUser, password: 'other password'})
      expect(response.clientError).toBeTruthy()
      expect(response.status).toBe(400)
      expect(JSON.parse(response.text).message).toBe('password incorrect!')
    })
  })
})