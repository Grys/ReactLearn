import React from 'react';
import PropTypes from 'prop-types'
import './ToDoItem.css'

function ToDoItem({ item, index, onChange }) {
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
                <button className='rm'>&times;</button>

            </li>
    );
}

ToDoItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ToDoItem;