export interface NutritionGoalsDTO {
 id?: string
 userId: string
 calories: string
 fatPercentage: Number
 proteinPercentage: Number
 carboPercentage: Number
 status?: 'Active' | 'Inactive'
 desiredWeight: Number | null
}