import { User } from "@/domain/user/User";
import { UserRepository } from "@/repositories/user/UserRepository";
import { hashSync } from 'bcrypt'

export class UserServices {

  constructor(
    private readonly repository: UserRepository
  ) { }


  async getByEmail(email: string) {
    const user = await this.repository.getByEmail(email)
    return new User(user)
  }

  async add(data: User) {
    const hashPassword = hashSync(data.password, 12)
    return await this.repository.add({ ...data, password: hashPassword })
  }

  async get() {
    const users = await this.repository.get()
    return users.map(user => (new User({ ...user, password: null })))
  }

  async getById(id: string) {
    const user = await this.repository.getById(id)
    return new User({ ...user, password: null })
  }

}