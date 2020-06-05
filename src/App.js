import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Routes from "./components/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer autoClose={4000} />
      <Routes />
    </div>
  );
}

export default App;
