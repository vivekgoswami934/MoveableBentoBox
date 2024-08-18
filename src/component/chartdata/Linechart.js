import React, { useState, useEffect } from "react";
import "../../assets/Barchart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const Linechart = () => {
  const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.95);

  const data = {
    labels: ["Aug 02", "Aug 03", "Aug 04", "Aug 05", "Aug 06"],
    datasets: [
      {
        data: [200, 180, 220, 160, 250],
        fill: true,
        backgroundColor: "#777",
        borderColor: "#367B6B",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        data: [250, 280, 760, 300, 350],
        fill: true,
        backgroundColor: "#777",
        borderColor: "#ed0295",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
        borderDash: [5, 5],
      },
      {
        data: [300, 350, 1000, 300, 400],
        fill: true,
        backgroundColor: "#777",
        borderColor:"#1495BB",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth * 0.95);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
       
      },
      y: {
        type: "linear",
        position: "left",
        beginAtZero: true,
        
        grid: {
          drawBorder: false,
        },

        ticks: {
          stepSize: 200,
          callback: (value) => {
            if (value >= 1000) {
              return (
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(value / 1000) + "k"
              );
            }
            return value.toString();
          },
        },
      },
    },
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context) => {
            const datasetLabel = context.dataset.label || "";
            const value = context.parsed.y;
            return datasetLabel + ": " + value;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    
  };

  return (
    <>
      <div className="chart-container">
        <div className="title-graph">INSTANCES</div>
        <Line
          data={data}
          options={{ ...options, responsive: true, maintainAspectRatio: false }}
          width={chartWidth}
          height={250}
        />
      </div>
      <div className="legend-container">
        <div className="legend">
          <span className="line-color" style={{ background: "#1495BB" }}></span>
          <span className="legend-label">Max Instances</span>
        </div>
        <div className="legend">
          <span
            className="line-color"
            style={{
              background: "none",
              borderBottom: "2px dotted #ed0295",
              display: "inline-block",
            }}
          ></span>
          <span className="legend-label">Mid Instances</span>
        </div>
        <div className="legend">
          <span className="line-color" style={{ background: "#367B6B" }}></span>
          <span className="legend-label">Min Instances</span>
        </div>
      </div>
    </>
  );
};

export default Linechart;
