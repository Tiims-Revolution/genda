import React from 'react'
import Todo from '../models/Todo'

const TodoItem: React.FC<{
  todo: Todo
  canDelete?: boolean
  deleteTodo: (id: string) => void
}> = ({ todo, canDelete, deleteTodo }) => {
  return (
    <li>
      <p>
        <strong>Description: {todo.description}</strong>
      </p>
      <p>
        <span>Status: {todo.status} </span>
        {canDelete && (
          <button type="button" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        )}
      </p>
    </li>
  )
}

export default TodoItem
