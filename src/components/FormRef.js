import React, { useRef, useState } from "react";
import Card from "./Card";

const FormRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    if (passwordRef.current.value !== confirmRef.current.value) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log({
      full_name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input id="full_name" type="text" placeholder="Full Name" ref={nameRef} />
        <input id="email" type="email" placeholder="Email" ref={emailRef} />
        <input id="password" type="password" placeholder="Password" ref={passwordRef} />
        <input
          id="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          ref={confirmRef}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;