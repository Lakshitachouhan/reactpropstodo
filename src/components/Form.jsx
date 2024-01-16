import React, { useEffect, useState } from "react";

const Form = ({ savetodo, edit, updatetodo }) => {
  const [text, settext] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (edit.editmode) {
      updatetodo(edit.todo.id, text);
    } else {
      savetodo(text);
    }
    settext("");
  };
  useEffect(() => {
    settext(edit.todo.text);
  }, [edit]);
  return (
    <> 
      <form onSubmit={(e) => handlesubmit(e)}>
        <input
          type="text"
          placeholder="Enter new to-do list"
          value={text}
          required
          // value="hmhhb"
          onChange={(e) => settext(e.target.value)}
          
        />
        <button className="savebtn"><i class="fa-solid fa-plus"></i></button>
      </form>
    </>
  );
};

export default Form;
