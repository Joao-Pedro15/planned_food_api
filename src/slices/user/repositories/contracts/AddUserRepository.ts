import { User } from "@prisma/client";

export interface AddUserRepository {
  add(data: Omit<User, 'id'>): Promise<any>
}