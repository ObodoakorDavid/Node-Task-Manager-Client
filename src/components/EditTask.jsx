/** @format */

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import angleBracket from "../images/Vector.png";

const EditTask = ({ baseURL }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getData = async (url) => {
      let res = await fetch(url);
      let jsonData = await res.json();
      console.log(jsonData.task);
      setTask(jsonData.task);
      if (jsonData.task.tag === "important") {
        console.log("kkk");
        setOptions(["important", "urgent"]);
      } else {
        setOptions(["urgent", "important"]);
      }
    };
    getData(`${baseURL}/api/task/${id}/`);
  }, [id, baseURL]);

  const editTask = async (updatedTask, id) => {
    const response = await fetch(`${baseURL}/api/task/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="create-task pt-4 pb-4">
      <div className="d-flex align-items-center gap-3">
        <img
          onClick={() => {
            navigate(-1);
          }}
          style={{ width: "12px" }}
          src={angleBracket}
          alt=""
        />
        <h2 className="m-0 text-start fs-1">Edit Task</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTask(task, task._id);
          console.log(task);
        }}
        action=""
        className="form-group"
      >
        <div>
          <p>Task Title</p>
          <input
            onChange={(e) => {
              setTask({ ...task, title: e.target.value });
            }}
            type="text"
            value={task.title || ""}
            className="form-control"
            placeholder="E.g Project Defense, Assignment..."
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            onChange={(e) => {
              setTask({ ...task, description: e.target.value });
            }}
            name=""
            id=""
            cols="30"
            rows="10"
            value={task.description}
            className="form-control"
            placeholder="Briefly describe your task..."
          >
            {task.description}
          </textarea>
        </div>
        <div>
          <p>Tags</p>
          <select
            onChange={(e) => {
              setTask({ ...task, tag: e.target.value });
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

export default EditTask;
