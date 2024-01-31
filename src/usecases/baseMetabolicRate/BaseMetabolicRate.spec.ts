import { BaseMetabolicRate } from "./BaseMetabolicRate"

describe('testing usecase metabolic', () => {

 describe('men cases calc metabolic', () => {

  const baseProps = {
   age: 31,
   gender: "male" as any,
   height: 179,
   weight: 90
  }

  it('should keep target metabolic rate and activity medium', () => {
   const base = new BaseMetabolicRate({ ...baseProps, activity: 'mediumActivity' })
   const result = base.calc('keep')
   expect(result).toEqual('3073.960')

  })

 })

})