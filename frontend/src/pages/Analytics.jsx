import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/analytics/summary")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <>
        <Navbar />
        <p className="p-10">Loading Analytics...</p>
      </>
    );
  }

  const domainChart = {
    labels: Object.keys(data.domainCount),
    datasets: [
      {
        label: "Papers per Domain",
        data: Object.values(data.domainCount),
        backgroundColor: "rgba(37,99,235,0.7)"
      }
    ]
  };

  const stageChart = {
    labels: Object.keys(data.stageCount),
    datasets: [
      {
        label: "Papers per Stage",
        data: Object.values(data.stageCount),
        backgroundColor: [
          "#2563eb",
          "#16a34a",
          "#dc2626",
          "#f59e0b",
          "#9333ea"
        ]
      }
    ]
  };

return (
  <>
    <Navbar />

    <div className="p-6">

      <h2 className="text-xl font-bold mb-6">Analytics Dashboard</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Papers by Domain</h3>

          <div style={{ height: "300px" }}>
            <Bar
              data={domainChart}
              options={{
                responsive: true,
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Papers by Reading Stage</h3>

          <div style={{ height: "300px" }}>
            <Pie
              data={stageChart}
              options={{
                responsive: true,
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

      </div>

    </div>
  </>
);

};

export default Analytics;
