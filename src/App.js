/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTasks from "./components/AllTasks";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import Navbarr from "./components/Navbarr";

function App() {
  const baseURL = `https://taskmanagerserver1.onrender.com`;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr />
        <hr style={{ margin: "0" }} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tasks" element={<AllTasks baseURL={baseURL} />} />
          <Route path="/create" element={<CreateTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask baseURL={baseURL} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
