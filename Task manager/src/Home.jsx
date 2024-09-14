import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/tasks/${id}`
      );
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const createTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/tasks",
        {
          name: inputValue,
        }
      );
      setInputValue('')
      setTasks([...tasks, response.data.product]);
     
    } catch (error) {
      console.log(error);
    }
    
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data.product))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>Task Manager</h1>
      <div className="container">
        <form action="POST" onSubmit={createTask}>
          <input type="text" name="task" id="task" onChange={handleChange} value={inputValue}/>
          <button>Submit</button>
        </form>
      </div>

      <div className="tasks">
        <h1>{tasks && tasks.length<1? `No Tasks `: `Tasks (${tasks.length})`}</h1>
        {tasks.map((task) => {
          const { _id, name, price, completed } = task;
        
          return (
           
            
            <div className="task" key={_id}>
              <div className="left">
                <h3>{name}</h3>
                <p>{price}</p>
              </div>
              <div className="right">
                <MdDelete className="bin" onClick={() => handleDelete(_id)} />
                  <Link  to={`/api/v1/tasks/${_id}`}><FaEdit className="edit" style={{color: 'black'}}/></Link>
                
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
