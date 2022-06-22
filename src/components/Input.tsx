import React, { useState } from 'react'
import Todo from '../models/Todo'

const Input: React.FC<{ addTodo: (todo: Todo) => void }> = ({ addTodo }) => {
  const [value, setValue] = useState<string>('')

  const handleValueChange = (newValue: string) => {
    setValue(newValue)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(new Todo(value))
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type={'text'}
        placeholder={'To-do description'}
        onChange={(event) => handleValueChange(event.target.value)}
        value={value}
      />
    </form>
  )
}

export default Input
