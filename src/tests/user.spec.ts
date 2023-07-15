import { fakeUser } from '@/slices/user/useCases/addUser/AddUserUseCase.spec'
import app from '../app'
import request from 'supertest'
let server;

describe('e2e test POST user', () => {
  beforeAll(done => {
    server = app.listen(done)
  })
  afterAll(done => {
    server.close(done)
  })
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