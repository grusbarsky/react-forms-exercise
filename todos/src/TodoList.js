import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  // add a todo
  const create = addTodo => {
    setTodos(todos => [...todos, addTodo]);
  };

  // update a todo
  const update = (id, updatedTask) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };

  // delete a todo
  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const todoComponents = todos.map(todo => (
    <Todo
      remove={remove}
      key={todo.id}
      id={todo.id}
      task={todo.task}
      update={update}
    />
  ));

  return (
    <div>
      <NewTodoForm createTodo={create} />
      <ul>{todoComponents}</ul>
    </div>
  );
}

export default TodoList;
