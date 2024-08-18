import React, { useState, useEffect } from "react";
import "../../assets/Barchart.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  Tooltip,
  PointElement,
  Legend
);

const Barchart = () => {
  const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.95);
  const data = {
    labels: ["JUN", "JULY", "AUG", "SEP", "OCT", "NOV"],
    datasets: [
      {
        label: "Actual Cost",
        data: [690000, 500000, 600000, 300000],
        backgroundColor: "#ED0295",
      },
      {
        label: "Projected Cost",
        data: [498000, 600000, 750000, 620000, 520000, 650000],
        backgroundColor: "#CDCDCD",
      },
      {
        label: "Actual Run Rate",
        data: [800000, 950000, 800000],
        borderColor: "#ED0295",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderCapStyle: "round",
        tension: 0.3,
        borderWidth: 2,
        type: "line",
      },
    ],
  };

  const ticks = {
    color: "#777",
    font: {
   size: 12,
   weight: 500,
   family: "Montserrat",
    },
   };
    
   const options = {
    scales: {
   x: {
    ticks: ticks,
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
   ...ticks,
   stepSize: 200000,
   callback: (value) => {
    const usdValue = value / 1000000;
    
    if (usdValue >= 1) {
   return (
    new Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD",
   minimumFractionDigits: 0,
   maximumFractionDigits: 1,
    }).format(usdValue) + "M"
   );
    } else if (usdValue >= 0.001) {
   return (
    new Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD",
   minimumFractionDigits: 0,
   maximumFractionDigits: 0,
    }).format(usdValue * 1000) + "k"
   );
    }
    return new Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD",
   minimumFractionDigits: 0,
   maximumFractionDigits: 0,
    }).format(usdValue);
   },
    },
   },
   y2: {
    type: "linear",
    position: "right",
    beginAtZero: true,
    grid: {
   drawBorder: false,
   display: false,
    },
    max: 0.5,
    ticks: {
   stepSize: 0.1,
   values: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5],
   callback: (value) => {
    return value.toString();
   },
    },
   },
    },
    plugins: {
   tooltip: {
    callbacks: {
   label: (context) => {
    const value = context.dataset.data[context.dataIndex];
    return value.toString();
   },
    },
   },
   legend: {
    display: false,
   },
    },
    indexAxis: "x",
    barPercentage: 1,
    categoryPercentage: 0.4,
    barThickness: "flex",
    maxBarThickness: 25,
    minBarLength: 1,
    max: 1000000,
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

  return (
    <>
      <div className="chart-container">
        <div className="title-graph">COST</div>
        <Bar
          data={data}
          options={{ ...options, responsive: true, maintainAspectRatio: false }}
          width={chartWidth}
          height={250}
        />
        <div className="title-graph-right">RUN RATE</div>
      </div>
      <div className="legend-container">
        <div className="legend">
          <span
            className="legend-color"
            style={{ backgroundColor: "#ED0295" }}
          ></span>
          <span className="legend-label">Actual Cost</span>
        </div>
        <div className="legend">
          <span
            className="legend-color"
            style={{ backgroundColor: "#CDCDCD" }}
          ></span>
          <span className="legend-label">Projected Cost</span>
        </div>
        <div className="legend">
          <span
            className="legend-line"
            style={{ borderColor: "#ED0295", backgroundColor: "#ED0295" }}
          ></span>
          <span className="legend-label">Actual Run Rate</span>
        </div>
      </div>
    </>
  );
};

export default Barchart;
