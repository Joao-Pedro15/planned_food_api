import { User } from "@prisma/client"

export interface UpdateUserRepository {
  update(id: string, data: Partial<User>): Promise<User | null>
}