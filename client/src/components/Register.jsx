import { useState } from "react";
import axios from "../utils/axios";

const REGISTER_URL = "/register";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
        );
        if(response.status === 201) {
          alert('registration successful')
        } else if(response.sendStatus === 409){
          alert('username taken')
        } else {
          alert('registration failed')
        }
        console.log(response)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
};
export default Register;
