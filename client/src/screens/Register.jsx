import React from 'react'
import { useState } from 'react'

function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: ''
  })
  const { handleRegister } = props;
  const { username, email, password } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleRegister(formData)
    }}>
      <h3>Register</h3>
      <label>
        Username:
      <input
        type="text"
        name="username"
          value={ username}
        onChange={handleChange}
        />
        <br/>
      </label>
      <label>
        Email:
      <input
        type="text"
        name="email"
          value={ email}
        onChange={handleChange}
        />
        <br/>
      </label>
      <label>
      Password:
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      </label>
      <br/>
     
      <button>Submit</button>
  </form>
)
}
export default Register;