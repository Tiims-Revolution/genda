import Input from './components/Input'
import TodoList from './components/TodoList'
import { useState } from 'react'
import Todo from './models/Todo'

function App () {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todo: Todo): void => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <h1>Todo App</h1>
      <Input addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
