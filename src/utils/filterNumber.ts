export function filterNumber(number: string) {

 const numberFormat = Number(number)
 if (isNaN(numberFormat) || numberFormat == 0) return { not: 0 }
 return numberFormat

}