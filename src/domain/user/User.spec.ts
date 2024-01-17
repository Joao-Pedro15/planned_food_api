import { User } from "./User"
import { UserDTO } from "./UserDTO"

describe('testing user domain', () => {
  it('should return instance User', () => {
    const userDto:UserDTO = { email: 'fakeEmail', name: 'fakeName', password: 'fakePassword' }
    const user = new User(userDto)
    expect(Object.keys(user)).toEqual(['id', 'name', 'email', 'password'])
  })
})