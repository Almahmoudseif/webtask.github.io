import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);

    // Assuming login validation is successful
    navigate('/Sidebar');
  };

  return (
    <div className="container1">
      <div className="login">
        {/* <h2><b>LOGIN</b></h2> */}
      </div>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-group1">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p className="sign">Don't have an account? <a href="/signup">SignUp</a>.</p>
      </form>
    </div>
  );
};

export default Login;

