import { User } from "@prisma/client";
import { AddUserRepository, DeleteUserRepository, GetUserRepository, UpdateUserRepository } from "./contracts";

export interface IUserRepository extends AddUserRepository, GetUserRepository, UpdateUserRepository, DeleteUserRepository {}

export class UserRepository implements IUserRepository{
  constructor(protected repository: IUserRepository) {}
  async add(data: Omit<User, 'id'>): Promise<any> {
    return await this.repository.add(data)
  }

  async getById(id: string): Promise<User> {
    return await this.repository.getById(id)
  }

  async getByEmail(email: string): Promise<User> {
    return await this.repository.getByEmail(email) 
  }

  async update(id: string, data: Partial<User>): Promise<any> {
    return await this.repository.update(id, data)
  }

  async delete(id: string): Promise<any> {
    return await this.repository.delete(id)
  }
}