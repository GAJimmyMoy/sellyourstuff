import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { handleLogin } = props;
  const { username, password } = formData;
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
          handleLogin(formData);
        }}
      >
        <h3>Login</h3>
        <div className="form-group">
          <label>
            Username:
            <input
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
            Password:
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <Link to="/register">
          <button className="btn">Register</button>
        </Link>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
export default Login;
