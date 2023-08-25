import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
