import { Notifications } from "@/context/Notification"

export interface UserData {
  name: string
  email: string
  password: string
}

export class UserEntity extends Notifications {
  public name: string
  public email: string
  public password: string
  constructor(name: string, email: string, password: string) {
    super()
    this.name = name
    this.email = email
    this.password = password
  }

  isValid() {
    if(!this.password.trim().length) {
      this.addNotification('Invalid password!')
    }
    
    if(this.email.trim().length < 5) {
      this.addNotification('Invalid email!')
    }


    return !this.hasNotifications()

  }
}