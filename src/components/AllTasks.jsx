/** @format */

import React, { useEffect, useState } from "react";
import "../styles/Tasks.css";
import editIcon from "../images/edit-icon.png";
import deleteIcon from "../images/bin-img.png";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../utils/Loading";

const AllTasks = ({ baseURL }) => {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async (url) => {
      setLoading(true);
      let res = await fetch(url);
      let jsonData = await res.json();
      setTasks(jsonData.tasks);
      setLoading(false);
    };
    getData(`${baseURL}/api/task`);
  }, [baseURL]);

  const deleteData = (id) => {
    fetch(`${baseURL}/api/task/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="tasks pt-4 pb-4">
      <div className="my-tasks">
        <h1>My Tasks</h1>{" "}
        <Link
          className="text-decoration-none fw-bold"
          style={{ color: "#974FD0" }}
          to="/create"
        >
          + Add New Task
        </Link>
      </div>
      {loading && <Loading />}
      {tasks &&
        tasks.map((task) => {
          return (
            <div className="each-task" key={task._id}>
              <div className="first-line p-3 pb-2 d-flex align-items-baseline">
                <div>
                  {task.tag === "urgent" ? (
                    <p style={{ color: "#F38383", margin: "0" }}>Urgent</p>
                  ) : (
                    <p style={{ color: "#73C3A6", margin: "0" }}>Important</p>
                  )}
                </div>
                <div>
                  <Link
                    style={{ backgroundColor: "#974FD0", color: "white" }}
                    className="btn btn-lg-lg d-flex align-items-center gap-2 fw-bold"
                    to={`/edit/${task._id}`}
                  >
                    <img src={editIcon} alt="" />
                    Edit
                  </Link>
                  <div>
                    <button
                      style={{
                        border: "1.5px solid #974FD0",
                        color: "#974FD0",
                      }}
                      className="btn d-flex align-items-center gap-2 fw-bold"
                      onClick={() => {
                        deleteData(task._id);
                        setTimeout(() => {
                          navigate(0);
                        }, 1000);
                      }}
                    >
                      <img src={deleteIcon} alt="" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <hr style={{ margin: "8px" }} />
              <div className="p-3">
                <p className="fw-bold fs-5 text-sm-start">{task.title}</p>
                <p className="text-sm-start">{task.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllTasks;
