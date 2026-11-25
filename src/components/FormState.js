import React, { useState } from "react";
import Card from "./Card";

const FormState = () => {
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    // input id matches the state key
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.password !== values.password_confirmation) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log(values);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input id="full_name" type="text" placeholder="Full Name"
          value={values.full_name} onChange={handleChange} />
        <input id="email" type="email" placeholder="Email"
          value={values.email} onChange={handleChange} />
        <input id="password" type="password" placeholder="Password"
          value={values.password} onChange={handleChange} />
        <input id="password_confirmation" type="password" placeholder="Confirm Password"
          value={values.password_confirmation} onChange={handleChange} />
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;