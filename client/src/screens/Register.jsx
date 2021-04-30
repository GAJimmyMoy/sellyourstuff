import React from "react";
import { useState } from "react";

function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { handleRegister } = props;
  const { username, email, password } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <h3>Register</h3>
        <div className="form-group">
          <label>
            Username:
            <input
              required
              className="form-control"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              required
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Password:
            <input
              required
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
        </div>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
export default Register;
