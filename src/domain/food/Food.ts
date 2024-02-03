import { FoodDTO } from "./FoodDTO";

export class Food {
    private readonly grams: number
    id: number
    name: string
    categoryId: number
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
    
    constructor(data: FoodDTO, grams = 1) {
        this.name = data.name
        this.category = data.category
        this.categoryId = data.categoryId
        this.nutrients = {
            id: data.nutrients?.id,
            foodId: data.nutrients?.foodId,
            ash: (data.nutrients?.ash * grams) ?? 0,
            calcium: (data.nutrients?.calcium * grams) ?? 0,
            carbohydrates: (data?.nutrients?.carbohydrates * grams) ?? 0,
            cholesterol: (data.nutrients?.cholesterol * grams) ?? 0,
            copper: (data.nutrients?.copper * grams) ?? 0,
            dietaryFiber: (data.nutrients?.dietaryFiber * grams) ?? 0,
            iron: (data.nutrients?.iron * grams) ?? 0,
            kcal: (data.nutrients?.kcal * grams) ?? 0,
            kJ: (data.nutrients?.kJ * grams) ?? 0,
            lipids: (data.nutrients?.lipids * grams) ?? 0,
            magnesium: (data.nutrients?.magnesium * grams) ?? 0,
            manganese: (data.nutrients?.manganese * grams) ?? 0,
            moisture: (data.nutrients?.moisture * grams) ?? 0,
            niacin: (data.nutrients?.niacin * grams) ?? 0,
            phosphorus: (data.nutrients?.phosphorus * grams) ?? 0,
            potassium: (data.nutrients?.potassium * grams) ?? 0,
            protein: (data.nutrients?.protein * grams) ?? 0,
            pyridoxine: (data.nutrients?.pyridoxine * grams) ?? 0,
            rae: (data.nutrients?.rae * grams) ?? 0,
            re: (data.nutrients?.re * grams) ?? 0,
            retinol: (data.nutrients?.retinol * grams) ?? 0,
            riboflavin: (data.nutrients?.riboflavin * grams) ?? 0,
            sodium: (data.nutrients?.sodium * grams) ?? 0,
            thiamin: (data.nutrients?.thiamin * grams) ?? 0,
            vitaminC: (data.nutrients?.vitaminC * grams) ?? 0,
            zinc: (data.nutrients?.zinc * grams) ?? 0
        }
    }

}