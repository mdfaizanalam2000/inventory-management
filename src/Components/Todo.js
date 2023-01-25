import React from 'react'

export default function Todo(props) {
    return (
        <>
            <tr>
                <td>{props.todo.sno}</td>
                <td>{props.todo.title}</td>
                <td>{props.todo.desc}</td>
                <td>{props.todo.owner}</td>
                <td>{props.todo.vendor}</td>
                <td><button className='btn btn-danger' onClick={() => { props.onDelete(props.todo) }}>Delete</button></td>
            </tr>
        </>
    )
}
