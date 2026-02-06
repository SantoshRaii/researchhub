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
    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password
      });
      login(res.data);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Register;
