import { useState } from "react";
import axios from '../utils/axios'

const LOGIN_URL = '/login'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({username, password}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
        }
        )
        console.log(response)
    } catch (err) {

    }
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Login</h1>
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
      <button>Login</button>
    </form>
  );
};
export default Login;
