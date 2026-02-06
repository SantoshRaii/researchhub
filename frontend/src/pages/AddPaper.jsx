import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const AddPaper = () => {
  const [form, setForm] = useState({
    title: "",
    firstAuthor: "",
    domain: "",
    readingStage: "",
    impactScore: "",
    citations: 0
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/papers", form);
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Add Paper</h2>

      <input name="title" placeholder="Title" onChange={handleChange} />
      <br /><br />

      <input name="firstAuthor" placeholder="First Author" onChange={handleChange} />
      <br /><br />

      <input name="domain" placeholder="Domain" onChange={handleChange} />
      <br /><br />

      <input name="readingStage" placeholder="Reading Stage" onChange={handleChange} />
      <br /><br />

      <input name="impactScore" placeholder="Impact Score" onChange={handleChange} />
      <br /><br />

      <input
        name="citations"
        type="number"
        placeholder="Citations"
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default AddPaper;
