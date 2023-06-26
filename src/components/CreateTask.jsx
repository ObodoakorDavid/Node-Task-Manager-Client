/** @format */

import React from "react";
import "../styles/CreateTask.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import angleBracket from "../images/Vector.png";

const CreateTask = ({ baseURL }) => {
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    tag: "urgent",
  });

  const options = ["urgent", "important"];

  const createTask = async (newTask) => {
    console.log(newTask);
    const res = await fetch(`${baseURL}/api/task/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    console.log(data);
    navigate("/tasks");
  };

  return (
    <div className="create-task pb-4 pt-4">
      <div className="d-flex align-items-center gap-3">
        <img
          onClick={() => {
            navigate(-1);
          }}
          style={{ width: "12px" }}
          src={angleBracket}
          alt=""
        />
        <h2 className="m-0 text-start fs-1">New Task</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTask(newTask);
          console.log(newTask);
        }}
        action=""
        className="form-group"
      >
        <div>
          <p>Task Title</p>
          <input
            onChange={(e) => {
              setNewTask({ ...newTask, title: e.target.value });
            }}
            type="text"
            className="form-control"
            placeholder="E.g Project Defense, Assignment..."
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            onChange={(e) => {
              setNewTask({ ...newTask, description: e.target.value });
            }}
            name=""
            id=""
            cols="30"
            rows="10"
            className="form-control"
            placeholder="Briefly describe your task..."
          ></textarea>
        </div>
        <div>
          <p>Tags</p>
          <select
            onChange={(e) => {
              setNewTask({ ...newTask, tag: e.target.value });
            }}
            className="form-select"
          >
            {options.map((each) => {
              return (
                <option key={each} value={each}>
                  {each}
                </option>
              );
            })}
          </select>
        </div>
        <button
          style={{
            backgroundColor: "#974FD0",
            color: "white",
          }}
          className="btn"
        >
          Done
        </button>
        <Link style={{ color: "#974FD0" }}>Back To Top</Link>
      </form>
    </div>
  );
};

export default CreateTask;
