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
   carboPercentage: Number(((carbo_cal / this.calories) * 100).toFixed(3)),
   proteinPercentage: Number(((proteinCal / this.calories) * 100).toFixed(3)),
   fatPercentage: Number(((lipidCal / this.calories) * 100).toFixed(3))
  }
 }

 private protein(weight: number) {
  const proteinGrams = weight * 2.2
  return proteinGrams * 4
 }

 private lipid(weight: number) {
  const lipidGrams = weight * 1
  return lipidGrams * 9
 }

 private carbohydrates(restCalories: number) {
  const carbohydratesGrams = this.calories - restCalories
  return carbohydratesGrams
 }

}