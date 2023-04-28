import React, { useEffect, useState } from "react";

import ListGenerated from "./components/ListGenerated";
import Form from "./components/Form.jsx";

import "./styles/HomePage.css";

function App() {
  // * initializing list
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const storedToDoList = JSON.parse(localStorage.getItem("toDoList"));

    if (storedToDoList) {
      setToDoList(storedToDoList);
    } else {
      setToDoList(["help"]); // default value
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  // * adds item to list
  const handleAddTask = (newTask) => {
    const updatedList = [...toDoList, newTask];
    setToDoList(updatedList);
  };

  // * removes item from list
  const removeTask = (itemToRemove) => {
    const updatedList = toDoList.filter((item) => item !== itemToRemove);
    setToDoList(updatedList);
  };

  // * removes last item from list
  const removeLastItem = () => {
    const updatedList = [...toDoList];
    updatedList.pop();
    setToDoList(updatedList);
  };

  // * removes item from specific index
  const removeCertainTask = (index) => {
    console.log("removing specific task");
    
      const updatedList = [...toDoList];
      updatedList.splice(index, 1);
      setToDoList(updatedList);
  };
  
  // * downlod tasks
  const downloadTask = () => {
    console.log("download task");

    const element = document.createElement("a");
    
    const string = toDoList.join("\n");
    // console.log(string)
    const file = new Blob([string], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "example.txt";
    document.body.appendChild(element);
    element.click();
  }

  return (
    <>
      <div className="mainBody">
        <div className="Heading"> ToDo List</div>

        <div className="ListContainer">
          <ul>
            {toDoList.length > 0 ? (
              <ListGenerated
                items={toDoList}
                removeCertainTask={removeCertainTask}
              />
            ) : (
              <h1>Clearly you are jobless</h1>
            )}
          </ul>
        </div>

        <div className="formContainer">
          <Form
            onAddTask={handleAddTask}
            toDoList={toDoList}
            onRemoveTask={removeTask}
            removeLastItem={removeLastItem}
            downloadTask={downloadTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
