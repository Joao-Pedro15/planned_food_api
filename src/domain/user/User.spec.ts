import { User } from "./User"
import { UserDTO } from "./UserDTO"

describe('testing user domain', () => {
  it('should return instance User', () => {
    const userDto: UserDTO = { email: 'fakeEmail', name: 'fakeName', password: 'fakePassword', age: 21, gender: 'male', height: 180, weight: 85 }
    const user = new User(userDto)
    expect(Object.keys(user)).toEqual(['id', 'name', 'email', 'password', 'age', 'height', 'gender', 'weight', 'nutritionalGoals'])
  })
})