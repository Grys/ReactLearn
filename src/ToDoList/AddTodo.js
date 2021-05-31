import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './AddTodo.css'

function useInputValue(defaultValue='') {
    const [value, setValue] = useState(defaultValue)
    return {
        bind : {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo( {onCreate}) 
{
    const input = useInputValue('')

    function handleSubmit(event) {
        event.preventDefault();        
        if (input.value().trim())
            onCreate(input.value())
        input.clear()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input {...input.bind} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}


export default AddTodo