import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/register", {
      name,
      email,
      password
    });
    login(res.data);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
        <input className="w-full border p-2 mb-3" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
        <input className="w-full border p-2 mb-3" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input className="w-full border p-2 mb-3" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

        <button className="w-full bg-blue-600 text-white p-2 rounded" type="submit">
          Register
        </button>
        </form>
        <p className="mt-4 text-center">
          Already have account? <Link to="/" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
