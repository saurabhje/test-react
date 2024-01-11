import { useState } from "react";
import "./login.css";
const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    localStorage.setItem('username', result.username);
    localStorage.setItem('password', result.password);
  }

  const handleChange = (e) => {
    setData(values => ({...values, [e.target.name]: e.target.value}))
  }
  return (
    <div className="loginForm">
      <div>
        <div>
          <label htmlFor="username">Username</label>
          <input 
            id="username" 
            name="username" 
            type="text"  
            onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            name="password" 
            type="password" 
            onChange={handleChange}/>
        </div>
        <button type="submit"  onClick={handleSubmit} >Login</button>
      </div>
      <button type="submit">Sign Up</button>
    </div>
  );
};

export default Login;
