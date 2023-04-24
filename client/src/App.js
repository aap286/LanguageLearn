import React, { useEffect, useState } from "react";

import ListGenerated from "./components/ListGenerated";
import Form from "./components/Form.jsx";

import "./styles/HomePage.css";

function App() {
  // * initializing list
  const [toDoList, setToDoList] = useState([]);
 
  // * adds task to list
  const handleAddTask = (newTask) => {
    setToDoList([...toDoList, newTask]);
  };

  // * removes task to list
  const removeTask = (itemToRemove) => {
    const updatedList = toDoList.filter((item) => item !== itemToRemove);
    setToDoList(updatedList);
  };

  useEffect(() => {
    // console.log(toDoList)
     console.log(window.localStorage.getItem("toDoList"));
    //  setToDoList(window.localStorage.getItem("toDoList"));
   }, []);
  
  useEffect(() => {
    window.localStorage.setItem("toDoList", toDoList);
    console.log(toDoList)
  }, [toDoList]);


  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(JSON.parse(window.localStorage.getItem("count")));
  //   // setCount(JSON.parse(window.localStorage.getItem("count")));
  // }, []);

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  const increaseCount = () => {
    return setCount(count + 2);
  };
  const decreaseCount = () => {
    return setCount(count - 2);
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
        <Form
          onAddTask={handleAddTask}
          toDoList={toDoList}
          onRemoveTask={removeTask}
        />
      </div>

      <div className="App">
        <h1> Count {count} </h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>
    </>
  );
}

export default App;
