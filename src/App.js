import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './Components/AddTodo';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  function onDelete(todo) {
    console.log("I am onDelete", todo);
    setTodos(todos.filter((t) => {
      return t !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function addTodo(title, desc) {
    console.log("Adding", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Navbar title="TODOS-LIST" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
