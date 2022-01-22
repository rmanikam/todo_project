import React from "react";

const TodoForm = () => {
  return (
    <div>
      <input type="text" name="text" placeholder="Name..." />
      <input type="button" value="AddItem" />
    </div>
  );
};

export default TodoForm;
