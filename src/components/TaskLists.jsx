import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const TaskLists = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="TasksContainer">
      {todos.map((todo) => (
        <Task todo={todo} />
      ))}
    </div>
  );
};

export default TaskLists;
