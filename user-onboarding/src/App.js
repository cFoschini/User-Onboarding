import './App.css';
import Form from "./Form";
import React, { useState } from "react";


function App() {

  const initialFormValues = {
    name: "",
    email: "",
    password: "",
    terms: false
  };

  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div className="App">
      <Form
      name=""
      email=""
      password=""
      terms=""
      />
    </div>
  );
}

export default App;
