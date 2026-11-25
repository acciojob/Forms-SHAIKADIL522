import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";
import "../styles/App.css";

const App = () => (
  <div id="main">
    <nav>
      <Link id="form-link" to="/form">Form</Link>
      <Link id="form-ref-link" to="/form-ref">Form Ref</Link>
      <Link id="form-state-link" to="/form-state">Form State</Link>
    </nav>

    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/form-ref" element={<FormRef />} />
      <Route path="/form-state" element={<FormState />} />
    </Routes>
  </div>
);

export default App;

