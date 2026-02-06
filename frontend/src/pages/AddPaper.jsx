import { useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

const AddPaper = () => {
  const [form, setForm] = useState({  
  title: "",
  firstAuthor: "",
  domain: "",
  readingStage: "",
  impactScore: "",
  citations: ""
 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/papers", form);
    alert("Paper Added!");
    setForm({
        title: "",
        firstAuthor: "",
        domain: "",
        readingStage: "",
        impactScore: "",
        citations: ""
    });
  };

  return (
    <>
      <Navbar />
      <div className="p-10 max-w-xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Add Paper</h2>

        <form onSubmit={handleSubmit}>
        {["title","firstAuthor","domain","readingStage","impactScore","citations"].map((f)=>(
          <input
            key={f}
            name={f}
            value={form[f]}
            placeholder={f}
            onChange={handleChange}
            className="w-full border p-2 mb-3"
          />
        ))}

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
        </form>
      </div>
    </>
  );
};

export default AddPaper;
