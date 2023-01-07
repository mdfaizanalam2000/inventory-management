import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
    return (
        <div className='container'>
            <h2 className='text-center'>Your TODOS List</h2>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })}
        </div>
    )
}
