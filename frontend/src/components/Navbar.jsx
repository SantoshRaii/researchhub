import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  return (
    <div className="w-full bg-blue-600 text-white flex justify-between items-center px-6 py-4 shadow">
      <h1 className="text-xl font-bold">Research Tracker</h1>

      <div className="flex gap-4">
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button onClick={() => navigate("/add-paper")}>Add Paper</button>
        <button onClick={() => navigate("/library")}>Library</button>
        <button onClick={() => navigate("/analytics")}>Analytics</button>

        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
