import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/add-paper")}>Add Paper</button>
      <button onClick={() => navigate("/library")}>Library</button>
      <button onClick={() => navigate("/analytics")}>Analytics</button>
      <button onClick={() => {
        logout();
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
