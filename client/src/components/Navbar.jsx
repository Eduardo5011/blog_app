import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";

const PROFILE = "/profile";

const Navbar = () => {
  useEffect(() => {
    try {
      const response = axios.get(PROFILE, {
        withCredentials: true,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <header>
      <a href="/" className="logo">
        MyBlog
      </a>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};
export default Navbar;
