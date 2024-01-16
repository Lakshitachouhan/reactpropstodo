import React from "react";

const Listitem = ({ todo, deletetodo, edittodo }) => {
  return (
    <>
      <li>
        {todo.text}
        <div className="btn">
          <button className="editbtn" onClick={() => edittodo(todo)}>
            
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="deletebtn" onClick={() => deletetodo(todo.id)}>
            
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    </>
  );
};

export default Listitem;
