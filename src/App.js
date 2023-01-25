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
        <AddTodo addTodo={addTodo} />
        <Table todos={todos} onDelete={onDelete} />
      </div>
      <Footer />
    </>
  );
}

export default App;
