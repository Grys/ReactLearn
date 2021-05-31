import React from 'react';
import PropTypes from 'prop-types'
import ToDoItem from './ToDoItem'
import './ToDoList.css'

function ToDoList(props) {
    return (
        <ul>
            { props.todos.map((todo, idx) => {
                return <ToDoItem 
                    item={todo} 
                    key={todo.id} 
                    index={idx} 
                    onChange={props.onToggle} />  
            })}
        </ul>
    );
}


ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default ToDoList;