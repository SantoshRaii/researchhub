import { useEffect, useState } from "react";
import API from "../api/axios";

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

  const fetchAnalytics = async () => {
    const res = await API.get("/analytics/summary");
    setData(res.data);
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (!data) return <p>Loading...</p>;

  const domainChart = {
    labels: Object.keys(data.domainCount),
    datasets: [
      {
        label: "Papers per Domain",
        data: Object.values(data.domainCount)
      }
    ]
  };

  const stageChart = {
    labels: Object.keys(data.stageCount),
    datasets: [
      {
        label: "Papers per Stage",
        data: Object.values(data.stageCount)
      }
    ]
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Analytics</h2>

      <p>Total Papers: {data.totalPapers}</p>
      <p>Fully Read: {data.fullyRead}</p>

      <div style={{ width: 400 }}>
        <Bar data={domainChart} />
      </div>

      <div style={{ width: 400, marginTop: 40 }}>
        <Pie data={stageChart} />
      </div>
    </div>
  );
};

export default Analytics;
