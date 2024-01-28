import { User } from "@/domain/user/User";

export interface UserRepository {
  getByEmail(email: string): Promise<User>
  getById(id: string): Promise<User>
  add(data: User): Promise<User>
  get(): Promise<User[]>
}