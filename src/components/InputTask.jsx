import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const InputTask = () => {
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (text) {
      console.log("I am running");
      dispatch(addTodo(text));
      settext("");
    }
  };
  return (
    <div className="InputContainer">
      <input
        placeholder="Enter your Task here....."
        value={text}
        onChange={(e) => {
          settext(e.target.value);
        }}
        onKeyDown={(e) => {
          // Handle key down event
          if (e.key === "Enter") {
            // Check if the pressed key is "Enter"
            handleAddTodo(); // Call handleAddTodo function
          }
        }}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default InputTask;
