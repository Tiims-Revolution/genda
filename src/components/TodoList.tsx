import TodoItem from './TodoItem'
import React from 'react'
import Todo from '../models/Todo'
const TodoList: React.FC<{
  todos: Todo[]
  deleteTodo: (id: string) => void
}> = ({ todos, deleteTodo }) => {
  return (
    <>
      <h2>To-do List:</h2>
      <ul>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            canDelete
          />
        ))}
      </ul>
    </>
  )
}

export default TodoList
