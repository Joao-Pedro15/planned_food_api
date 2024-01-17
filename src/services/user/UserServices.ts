import { UserRepository } from "@/repositories/user/UserRepository";

export class UserServices {

  constructor(
    private readonly repository: UserRepository
  ) {}

  async getByEmail(email: string) {
    const user = await this.repository.getByEmail(email)
    return user
  }

}