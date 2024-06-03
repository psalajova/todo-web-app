import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  //hooks (like useState, useEffect) need to be on top

  const [todos, setTodos] = useState(() => {
    // to persist data after page refresh
    const localValue = localStorage.getItem("ITEM")
    if (localValue == null) return []
    return JSON.parse(localValue)
  }) //whatever the func returns, is the default value of useState

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos]) //everytime todos change, run the code defined in the useEffect function


  //then follow some helper functions
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, { id: crypto.randomUUID(), value: title, done: false }
      ]
    })
  }

  function toggleTodo(todoId, currentDone) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, done: currentDone }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  //lastly, return the components
  return (
    <> {/* <- an empty "fragment" because we can return only ONE THING in tsx */}
      <NewTodoForm addTodoProp={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}



