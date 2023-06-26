/** @format */

import React from "react";
import { Link } from "react-router-dom";
import hero_img from "../images/Hero_img.png";

const Homepage = () => {
  return (
    <div className="d-sm-flex text-sm-start p-5 align-items-center">
      <div className="flex-sm-grow-3">
        <h1>
          Manage your Tasks on{" "}
          <span style={{ color: "#974FD0" }}>TaskDuty</span>
        </h1>
        <p className="mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus sapiente cupiditate fuga! Perspiciatis natus molestiae
          facere quod harum, ullam ducimus similique libero maxime at
          repudiandae pariatur labore eveniet numquam perferendis!
        </p>
        <Link
          to="/tasks"
          className="btn btn-lg mt-3"
          style={{ backgroundColor: "#974FD0", color: "white" }}
        >
          Go to My Tasks
        </Link>
      </div>
      <img className="p-2 flex-sm-grow-1 w-100 mt-5" src={hero_img} alt="" />
    </div>
  );
};

export default Homepage;
