import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
    <Navbar />
    <div style={{ padding: 40 }}>
    <h2>Dashboard</h2>

    <p>Welcome {user?.name}</p>

    <button onClick={handleLogout}>Logout</button>
    <button onClick={() => navigate("/add-paper")}>Add Paper</button>
    <button onClick={() => navigate("/library")}>Library</button>
    <button onClick={() => navigate("/analytics")}>Analytics</button>

    </div>
    </>
  );
};

export default Dashboard;
