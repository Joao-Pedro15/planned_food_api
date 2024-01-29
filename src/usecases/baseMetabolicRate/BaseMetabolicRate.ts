const activyList = {
 'sedentary': 1.2,
 'lowActivity': 1.375,
 'mediumActivity': 1.55,
 'highActivity': 1.725,
 'extremeActivity': 1.9
}

type DataPerson = {
 height: number
 weight: number
 age: number
 gender: 'male' | 'female'
 activity: keyof typeof activyList
}


export class BaseMetabolicRate {
 height: number
 weight: number
 age: number
 gender: 'male' | 'female'
 activity: number
 constructor(data: DataPerson) {
  Object.assign(this, data)
  this.activity = activyList[data.activity]
 }

 calc(target: 'keep' | 'up' | 'down') {
  let calories = 0

  if (this.gender == 'female') {

   calories = this.formula(447.593, 9.247, 3.098, 4.330) * this.activity

   return this.dailyGoal(target, calories)

  }

  if (this.gender == 'male') {

   calories = this.formula(88.362, 13.397, 4.799, 5.677) * this.activity

   return this.dailyGoal(target, calories)

  }

  return calories

 }

 private formula(a: number, b: number, c: number, d: number) {
  return (a + (b * this.weight) + (c * this.height)) - (d * this.age)
 }

 private dailyGoal(target: 'up' | 'down' | 'keep', calories: number) {
  if (target == 'down') return calories - 500
  if (target == 'up') return calories + 500
  return calories
 }

}