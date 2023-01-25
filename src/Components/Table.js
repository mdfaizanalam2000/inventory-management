import React from 'react'
import Todo from './Todo'
export default function Heading(props) {
    return (
        <div className='container'>
            <h2 className='text-center'>Items Detail</h2>
            {props.todos.length === 0 ? "Nothing to display! Add items to display here" :
                <table className="table">
                    <thead className='bg-primary text-light'>
                        <tr>
                            <th scope="col">SNo.</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Date of Service</th>
                            <th scope="col">Owner Name</th>
                            <th scope="col">Vendor Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.todos.map((todo) => {
                            return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        })}
                    </tbody>
                </table>}
        </div>
    )
}
