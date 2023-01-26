import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import AddTodo from './Components/AddTodo';
import Table from './Components/Table';
import Navbar from './Components/Navbar';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  function onDelete(todo) {
    setTodos(todos.filter((t) => {
      return t !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [owner, setOwner] = useState("");
  const [vendor, setVendor] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  const [isEditItem, setIsEditItem] = useState(null);
  function onEdit(todo) {
    setToggleButton(true);
    setTitle(todo.title);
    setDesc(todo.desc);
    setOwner(todo.owner);
    setVendor(todo.vendor);
    setIsEditItem(todo.sno);
  }

  function submit(e) {
    e.preventDefault();
    if (!title || !desc || !owner || !vendor) {
      alert("Please fill all the fields")
    }
    else if (toggleButton) {
      setTodos(
        todos.map((item) => {
          if (item.sno === isEditItem) {
            return { ...item, title: title, desc: desc, owner: owner, vendor: vendor }
          }
          return item;
        })
      )
      setTitle("");
      setDesc("");
      setOwner("");
      setVendor("");
      setToggleButton(false);
      setIsEditItem(null);
    }
    else {
      addTodo(title, desc, owner, vendor);
      setTitle("");
      setDesc("");
      setOwner("");
      setVendor("");
    }
  }

  function addTodo(title, desc, owner, vendor) {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      owner: owner,
      vendor: vendor
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Navbar />
      <div className='container'>
        <AddTodo addTodo={addTodo} toggleButton={toggleButton} submit={submit} title={title} desc={desc} owner={owner} vendor={vendor} setTitle={setTitle} setDesc={setDesc} setOwner={setOwner} setVendor={setVendor} />
        <Table todos={todos} onDelete={onDelete} onEdit={onEdit} />
      </div>
      <Footer />
    </>
  );
}

export default App;
