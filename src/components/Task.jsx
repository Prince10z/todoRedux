import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTODO } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Task = (props) => {
  const [task, settask] = useState(props.todo.completed);
  const dispatch = useDispatch();
  const donetask = (val) => {
    settask(val);
    dispatch(toggleTodo(props.todo.id));
  };
  const deletetask = () => {
    dispatch(deleteTODO(props.todo.id));
  };
  return (
    <div
      className="Task"
      style={{ textDecoration: props.todo.completed ? "line-through" : "none" }}
    >
      <div style={{ flexGrow: 1 }} className="Task">
        <input
          type="checkbox"
          className="taskradio"
          value={task}
          onChange={(e) => donetask(e.target.checked)}
        />
        {props.todo.text}
      </div>
      <FontAwesomeIcon icon={faTrash} onClick={deletetask} />
    </div>
  );
};

export default Task;
