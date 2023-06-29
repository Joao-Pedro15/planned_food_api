interface Search<Identificator, Type=null> {
  where: { id: Identificator }
  data?: Partial<Type>
}

export interface Model<Type, Identificator> {
  create(data: Type): any
  findUnique(data: Search<Identificator>): any
  update(data: Search<Identificator, Partial<Type>>):any
  delete(data: Search<Identificator>): any
}

export class PrismaRepository<Type, Identificator> {
  public readonly model: Model<Type, Identificator>
  constructor(model: Model<Type, Identificator>) {
    this.model = model
  }

  async add(data: Type) {
    return await this.model.create(data)
  }

  async getById(id: Identificator) {
    return await this.model.findUnique({ where: { id } })
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