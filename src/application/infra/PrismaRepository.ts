import { HandleError } from "@/errors/HandleError"

interface Search<Identificator> {
  where: { id: Identificator },
}

export interface Model<Type, Identificator> {
  create(data: { data: Type }): any
  findUnique(data: Search<Identificator>): any
  update(data: Search<Identificator>&{data: Partial<Type>}):any
  delete(data: Search<Identificator>): any
}

export class PrismaRepository<Type, Identificator> {
  public readonly model: Model<Type, Identificator>
  constructor(model: Model<Type, Identificator>) {
    this.model = model
  }

  async add(data: Type) {
    return await this.model.create({data})
  }

  async getById(id: Identificator) {
    try {
      return await this.model.findUnique({ where: { id } })
    } catch (error) {
      throw new HandleError('Internal server error', 500)
    }
  }

  async update(id: Identificator, data: Partial<Type>) {
    return await this.model.update({
      where: { id },
      data
    })
  }

  async delete(id: Identificator) {
    return await this.model.delete({ where: { id } })
  }
}