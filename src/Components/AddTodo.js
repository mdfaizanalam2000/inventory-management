import React from 'react'
import { useState } from 'react'

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [owner, setOwner] = useState("");
    const [vendor, setVendor] = useState("");
    function submit(e) {
        e.preventDefault();
        if (!title || !desc || !owner || !vendor) {
            alert("Please fill all the fields")
        }
        else {
            props.addTodo(title, desc, owner, vendor);
            setTitle("");
            setDesc("");
            setOwner("");
            setVendor("");
        }
    }
    return (
        <div className='container'>
            <h2 className='text-center my-3'>Inventory Management</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Item Name</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Date of Service</label>
                    <input type="date" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="owner" className="form-label">Owner Name</label>
                    <input type="text" value={owner} onChange={(e) => { setOwner(e.target.value) }} className="form-control" id="owner" />
                </div>
                <div className="mb-3">
                    <label htmlFor="vendor" className="form-label">Vendor Name</label>
                    <input type="text" value={vendor} onChange={(e) => { setVendor(e.target.value) }} className="form-control" id="vendor" />
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
}
