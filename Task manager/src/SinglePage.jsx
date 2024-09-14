import React, { useEffect, useState } from "react";
import "./index.css";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const SinglePage = () => {
  const [singleTask, setSingleTask] = useState([]);
  const [name, setName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleTask(data.product);
        setName(data.product.name);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateTask = async (e) => {
    e.preventDefault();
    try {
      const updatedTask = {
        name: name,
      };
      const response = await axios.patch(
        `http://localhost:5000/api/v1/tasks/${id}`,
        updatedTask
      );
      setSingleTask(response.data.product);
    } catch (error) {
      console.log(error);
    }
    navigate('/api/v1/tasks')
  };

  console.log(name);
  return (
    <section>
      <h1>Tasks</h1>
      <div className="details">
        <p>
          <strong>id:</strong> {singleTask._id}
        </p>

        <p>
          <strong>Name:</strong> {singleTask.name}
        </p>
        <p>{singleTask.price}</p>
        <form onSubmit={updateTask}>
          <input
          placeholder="Update Task"
            type="text"
            name="update"
            id="update"
            onChange={(e) => setName(e.target.value)}
          />
          <button>Update</button>
        </form>
      </div>
    </section>
  );
};

export default SinglePage;
