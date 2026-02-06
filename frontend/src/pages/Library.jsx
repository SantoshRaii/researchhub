import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

const Library = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    API.get("/papers").then((res) => setPapers(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-10 grid grid-cols-3 gap-6">
        {papers.map((p) => (
          <div key={p._id} className="bg-white p-4 shadow rounded">
            <h3 className="font-bold">{p.title}</h3>
            <p>{p.domain}</p>
            <p>{p.readingStage}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Library;
