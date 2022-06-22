import { v4 as uuidv4 } from 'uuid'

class Todo {
  id: string
  description: string
  status: string

  constructor (description: string) {
    this.id = uuidv4()
    this.description = description
    this.status = 'pending'
  }
}

export default Todo
