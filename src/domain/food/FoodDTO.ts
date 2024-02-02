export interface FoodDTO {
    id: number
    name: string
    categoryId:number
    category: { name: string }
    nutrients: {
        id: number
        foodId: number
        moisture: number | null
        kcal: number | null
        kJ: number | null
        protein: number | null
        lipids: number | null
        cholesterol: number | null
        carbohydrates: number | null
        dietaryFiber: number | null
        ash: number | null
        calcium: number | null
        magnesium: number | null
        manganese: number | null
        phosphorus: number | null
        iron: number | null
        sodium: number | null
        potassium: number | null
        copper: number | null
        zinc: number | null
        retinol: number | null
        re: number | null
        rae: number | null
        thiamin: number | null
        riboflavin: number | null
        pyridoxine: number | null
        niacin: number | null
        vitaminC: number | null
    }
}
