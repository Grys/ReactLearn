import React from 'react'
import ToDoList from './ToDoList/ToDoList'
import Context from './context'

function App() {

  const [todos, setTodos] = React.useState([
    {id : 1, completed: false, title: 'Купить хлеба' },
    {id : 2, completed: true, title: 'Купить молока' },
    {id : 3, completed: false, title: 'Купить картофель' },
    {id : 4, completed: false, title: 'Купить морковь' },
  ])
  
  function toggleTodo(id) {
    setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className='wrapper'>
        <h1>ReactJS app</h1>
        { todos.length > 0 ? <ToDoList todos={todos} onToggle={toggleTodo} /> : <p>Empty TodoList</p> }
      </div>
    </Context.Provider>
  );
}

export default App;
