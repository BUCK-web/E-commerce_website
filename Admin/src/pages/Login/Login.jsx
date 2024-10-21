import React, { useState } from "react";
import axios from "axios";
import "./Login.css"

const Logins = ({ setLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          email: e.target[0].value,
          password: e.target[1].value,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setIsLoggedIn(true);
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  if (isLoggedIn) {
    setLogin(true);
  }
  return (
    <>
      <div className="adminLogin">
        <h1>Admin Login</h1>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="button">Login</button>
        </form>
        <p>
          Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </>
  );
};

export default Logins;
