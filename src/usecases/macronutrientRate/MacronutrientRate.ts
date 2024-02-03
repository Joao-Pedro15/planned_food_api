export class MacronutrienteRate {
 private calories: number
 constructor(calories: number) {
  this.calories = calories
 }

 calc(weight: number) {
  const lipidCal = this.lipid(weight)
  const proteinCal = this.protein(weight)
  const carbo_cal = this.carbohydrates(proteinCal + lipidCal)
  return {
   carboPercentage: (carbo_cal / this.calories) * 100,
   proteinPercentage: (proteinCal / this.calories) * 100,
   fatPercentage: (lipidCal / this.calories) * 100
  }
 }

 private protein(weight: number) {
  const proteinGrams = weight * 2
  return proteinGrams * 4
 }

 private lipid(weight: number) {
  const lipidGrams = weight * 1.2
  return lipidGrams * 9
 }

 private carbohydrates(restCalories: number) {
  const carbohydratesGrams = this.calories = restCalories
  return carbohydratesGrams * 4
 }

}