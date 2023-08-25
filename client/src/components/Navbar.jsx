import { Link } from "react-router-dom"

const Navbar = () => {
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
  )
}
export default Navbar

