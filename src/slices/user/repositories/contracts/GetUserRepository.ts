import { User } from "@prisma/client";

export interface GetUserRepository {
  getById(id: string): Promise<User | null>
}