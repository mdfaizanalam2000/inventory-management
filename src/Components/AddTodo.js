import React from 'react'

export default function AddTodo(props) {
    return (
        <div className='container'>
            <h2 className='text-center my-3'>Inventory Management</h2>
            <form onSubmit={props.submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Item Name</label>
                    <input type="text" value={props.title} onChange={(e) => { props.setTitle(e.target.value) }} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Date of Service</label>
                    <input type="date" value={props.desc} onChange={(e) => { props.setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="owner" className="form-label">Owner Name</label>
                    <input type="text" value={props.owner} onChange={(e) => { props.setOwner(e.target.value) }} className="form-control" id="owner" />
                </div>
                <div className="mb-3">
                    <label htmlFor="vendor" className="form-label">Vendor Name</label>
                    <input type="text" value={props.vendor} onChange={(e) => { props.setVendor(e.target.value) }} className="form-control" id="vendor" />
                </div>
                {props.toggleButton ? <button type="submit" className="btn btn-success">Update</button> : <button type="submit" className="btn btn-success">Add</button>}

            </form>
        </div>
    )
}
