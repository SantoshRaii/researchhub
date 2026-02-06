import { useEffect, useState } from "react";
import API from "../api/axios";

const Library = () => {
  const [papers, setPapers] = useState([]);

  const fetchPapers = async () => {
    const res = await API.get("/papers");
    setPapers(res.data);
  };

  useEffect(() => {
    fetchPapers();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Paper Library</h2>

      {papers.map((p) => (
        <div key={p._id}  className="card">
          <h4>{p.title}</h4>
          <p>{p.domain}</p>
          <p>{p.readingStage}</p>
        </div>
      ))}
    </div>
  );
};

export default Library;
