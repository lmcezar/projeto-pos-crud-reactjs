import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./pages/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer autoClose={4000} />
      <Form />
    </div>
  );
}

export default App;
