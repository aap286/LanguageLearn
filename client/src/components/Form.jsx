import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    TaskName: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (value !== "") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = formData.TaskName;
    //  console.log(item);

    //  remove the last task
    if (state.button === 3) {
      console.log("Button 3 clicked");
      if (props.toDoList.length > 0) {
        props.removeLastItem(item);
        return;
      } else {
        alert("Can't remove from empty list");
      }
    }

    // download the tasks
    if (state.button === 4) {
      console.log("Button 4 clicked!");

      if (props.toDoList.length > 0) {
        //  props.onRemoveTask(item);
        props.downloadTask();
        formData.TaskName = "";
        return
      } else {
        alert("We won't download an empty list");
      }
    }

    if (item === "") {
      alert("We don't accept empty tasks");
      return;
    }

    event.preventDefault();
    if (state.button === 1) {
      console.log("Button 1 clicked!");
      if (!props.toDoList.includes(item)) {
        props.onAddTask(item);
        formData.TaskName = "";
      } else {
        alert("You have added this task before");
      }
    }
    if (state.button === 2) {
      console.log("Button 2 clicked!");

      if (props.toDoList.includes(item)) {
        props.onRemoveTask(item);
        formData.TaskName = "";
      } else {
        alert("Task might be misspelled");
      }
    }
  };

  const state = {
    button: 1,
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <label className="formLabel">
        <div className="updateSection">
          <button
            onClick={() => (state.button = 1)}
            type="submit"
            name="btn1"
            value="wow"
          >
            Update
          </button>

          <button
            onClick={() => (state.button = 4)}
            type="submit"
            name="btn4"
            value="wow"
          >
            Download
          </button>
        </div>

        <input
          type="text"
          name="TaskName"
          value={formData.TaskName}
          onChange={handleInputChange}
        ></input>
        <div className="removeSection">
          <button
            onClick={() => (state.button = 2)}
            type="submit"
            name="btn2"
            value="oh no"
          >
            Remove
          </button>

          <button
            onClick={() => (state.button = 3)}
            type="submit"
            name="btn3"
            value="last"
          >
            Remove Last
          </button>
        </div>
      </label>
    </form>
  );
}

export default Form;
