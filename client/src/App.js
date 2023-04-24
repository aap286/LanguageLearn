import React, { useState } from "react";

import ListGenerated from "./components/ListGenerated";
import Form from "./components/Form.jsx";

import "./styles/HomePage.css";

function App() {
  const [toDoList, setToDoList] = useState([
    // "new york",
    // "camden",
    // "New Brunswick",
  ]);

  const handleAddTask = (newTask) => {

    
    setToDoList([...toDoList, newTask]);
  };


  const removeTask = (itemToRemove) => {
    const updatedList = toDoList.filter((item) => item !== itemToRemove);
    setToDoList(updatedList);
  };

  return (
    <>
      <div className="Heading"> ToDo List</div>

      <div className="ListContainer">
        <ul>
          {toDoList.length > 0 ? (
            <ListGenerated items={toDoList} />
          ) : (
            <h1>Clearly you are jobless</h1>
          )}
        </ul>
      </div>

      <div className="formContainer">
        <Form onAddTask={handleAddTask} toDoList={toDoList} onRemoveTask={removeTask} />
      </div>
    </>
  );
}

export default App;
