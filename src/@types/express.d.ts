interface User {
  id: string
  name: string
  email: string
  password: string | null
}

declare namespace Express {
  export interface Request {
    userLogged: User
  }
}