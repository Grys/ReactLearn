import React, {useEffect} from 'react'
import ToDoList from './ToDoList/ToDoList'
import AddTodo from './ToDoList/AddTodo'
import Context from './context'

function App() {

  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then(response =>  response.json())
      .then(todos => {
        setTimeout(() => {
          // emulate long query
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])
  
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

  function CreateTodo(title) {
    setTodos(todos.concat([{
      id: Date.now(),
      title: title,
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className='wrapper'>
        <h1>ReactJS app</h1>
        <AddTodo onCreate={CreateTodo}/>
        { todos.length > 0 ? (
            <ToDoList todos={todos} onToggle={toggleTodo} /> 
          ):(
            loading ? <div class="lds-dual-ring"></div> : <p>No todos</p>
          ) }
      </div>
    </Context.Provider>
  );
}

export default App;
