import { useState } from "react";
import axios from "axios";

import "./login.css";

const projectID = "92743180-8511-44b3-a85b-9063f0567d87";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // included as headers in the API request to authenticate the user and give access to their chats
    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      //GET request to the Chat Engine API to retrieve a list of chats that the authenticated user has access to
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // Redirect to chat page
      window.location.href = "/chat";
      setError("");
    } catch (err) {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="wrapper">
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Start chatting...</h1>
          <input
            className="input-register"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            className="input-register"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="login-button">
              <span>Submit</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default LoginForm;
