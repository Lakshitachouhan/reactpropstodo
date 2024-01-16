import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Listgroup from "./components/Listgroup";

const App = () => {
  const [todos, settodos] = useState([
  ]);

  const [edit, setedit] = useState({
    todo: {},
    editmode: false,
  });
  const savetodo = (text) => {
    const newtodo = {
      id: crypto.randomUUID(),
      text: text,
    };
    settodos([newtodo, ...todos]);
  };

  const deletetodo = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  const edittodo = (todo) => {
    setedit({
      todo: todo,
      editmode: true,
    });
  };
  const updatetodo = (oldid, newtext) => {
    settodos(
      todos.map((item) =>
        item.id === oldid ? { ...item, text: newtext } : item
      )
    );
    setedit({ todo: {}, editmode: false });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <Form savetodo={savetodo} edit={edit} updatetodo={updatetodo} />
        <Listgroup todos={todos} deletetodo={deletetodo} edittodo={edittodo} />
      </div>
    </>
  );
};

export default App;
