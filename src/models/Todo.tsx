
class Todo {
  id: number
  description: string
  status: string

  constructor (description: string) {
    this.id = 0
    this.description = description
    this.status = 'pending'
  }
}

export default Todo
