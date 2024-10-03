import { useState } from "react";
import InputTask from "./components/inputTask";
import TaskLists from "./components/TaskLists";
import store from "./redux/store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <div className="mainContainer">
        <h1 className="titleContainer">Task Manager</h1>
        <InputTask />
        <TaskLists />
      </div>
    </Provider>
  );
};

export default App;
