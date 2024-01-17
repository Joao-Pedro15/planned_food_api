import { User } from "@/domain/user/User";

export interface UserRepository {
  getByEmail(email:string): Promise<User>
}