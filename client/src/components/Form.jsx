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
       console.log(item);

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
               console.log("inside if  condition")
               props.onRemoveTask(item);
               //  formData.TaskName = "";
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
        <button
          onClick={() => (state.button = 1)}
          type="submit"
          name="btn1"
          value="wow"
        >
          Update
        </button>

        <input
          type="text"
          name="TaskName"
          value={formData.TaskName}
          onChange={handleInputChange}
        ></input>
        <button
          onClick={() => (state.button = 2)}
          type="submit"
          name="btn2"
          value="oh no"
        >
          Remove
        </button>
      </label>
    </form>
  );
}

export default Form;
