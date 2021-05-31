import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import Context from '../context'
import './ToDoItem.css'

function ToDoItem({ item, index, onChange }) {
const {removeTodo} = useContext(Context)

    const classes = []
    if (item.completed)
        classes.push('done')

    return (
            <li>
                <span className={classes.join(' ')}>
                    <input 
                        type='checkbox' 
                        onChange={() => onChange(item.id) } 
                        checked={item.completed}/>
                    <strong>{index+1}</strong>
                    &nbsp;
                    {item.title}
                </span>
                <button 
                    className='rm'
                    onClick={ removeTodo.bind(null, item.id) }>
                    &times;</button>

            </li>
    );
}

ToDoItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ToDoItem;