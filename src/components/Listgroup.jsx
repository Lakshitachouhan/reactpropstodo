import React from "react";
import Listitem from "./Listitem";

const Listgroup = ({ todos, deletetodo, edittodo }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Listitem key={todo.id} todo={todo} deletetodo={deletetodo} edittodo={edittodo}/>
        ))}
      </ul>
    </>
  );
};

export default Listgroup;
