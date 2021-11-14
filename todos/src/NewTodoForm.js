import React, { useState } from "react";
import uuid from "uuid/v1";

function NewTodoForm({ createTodo }) {
  const [task, setTask] = useState("");

  const handleChange = evt => {
    setTask(evt.target.value);
  };

  const getInput = evt => {
    evt.preventDefault();
    createTodo({ task, id: uuid() });
    setTask("");
  };

  return (
    <div>
      <form onSubmit={getInput}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          name="task"
          type="text"
          onChange={handleChange}
          value={task}
        />
        <button>Create new todo!</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
