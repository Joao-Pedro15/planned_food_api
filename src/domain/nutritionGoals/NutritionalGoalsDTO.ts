export interface NutritionGoalsDTO {
 id?: string
 userId: string
 calories: number
 fatPercentage: number
 proteinPercentage: number
 carboPercentage: number
 status?: 'Active' | 'Inactive'
 desiredWeight: number | null
}