import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <div className="p-10">
        <h2 className="text-2xl font-bold">Welcome, {user?.name}</h2>

        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 shadow rounded">Add & Track Papers</div>
          <div className="bg-white p-6 shadow rounded">Organize Library</div>
          <div className="bg-white p-6 shadow rounded">View Analytics</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
