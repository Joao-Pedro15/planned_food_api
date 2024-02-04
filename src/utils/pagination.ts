export function pagination(page?: number) {
 if (!page || page == 1) return {
  skip: 0,
  take: 60
 }

 const take = 60 * page
 return {
  skip: take - 60,
  take,
 }

}