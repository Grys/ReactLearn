import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './AddTodo.css'

function AddTodo( {onCreate}) 
{
    const [value, setValue] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        if (value.trim())
            onCreate(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}


export default AddTodo