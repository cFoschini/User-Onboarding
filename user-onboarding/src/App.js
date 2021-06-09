import './App.css';
import Form from "./Form";
import React, { useState } from "react";

  
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: ""
}

const initialDisabled = true;


function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = setFormValues({ 
    ...formValues,
    [name]: value
  });

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.name.trim()
    }
  }


  return (
    <div className="App">
      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
       />
    </div>
  );
}

export default App;
