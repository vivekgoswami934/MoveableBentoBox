import React from "react";
import '../../assets/Storagechart.css'

const Monitoringchart = () => {
  const numSVGsPerRow = 9;
  const numRows = 5;
  const numSVGsInSixthRow = 3;

  const getStatusColor = (rowIndex, svgIndex) => {
    if (rowIndex === 0 && svgIndex === 5) {
      return "#FF0000";
    } else if (rowIndex === 2 && svgIndex === numSVGsPerRow - 1) {
      return "#FFFF00";
    } else {
      return "#70C530";
    }
  };

  return (
    <div className="main-circle">
      {Array.from({ length: numRows }, (_, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            justifyContent: "start",
            gap: "0.1rem",
            marginLeft: "0.2rem",
          }}
        >
          {rowIndex === numRows - 1
            ? Array.from({ length: numSVGsInSixthRow }, (_, svgIndex) => (
                <svg
                  key={svgIndex}
                  height="50"
                  width="50"
                  style={{ margin: "5px" }}
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="10"
                    fill={getStatusColor(rowIndex, svgIndex)}
                  ></circle>
                  <circle
                    cx="25"
                    cy="25"
                    r="14"
                    stroke={getStatusColor(rowIndex, svgIndex)}
                    stroke-width="1"
                    fill="transparent"
                    opacity="0.6"
                  ></circle>
                  <circle
                    cx="25"
                    cy="25"
                    r="18"
                    stroke={getStatusColor(rowIndex, svgIndex)}
                    stroke-width="1"
                    fill="transparent"
                    opacity="0.4"
                  ></circle>
                  <circle
                    cx="25"
                    cy="25"
                    r="22"
                    stroke={getStatusColor(rowIndex, svgIndex)}
                    stroke-width="1"
                    fill="transparent"
                    opacity="0.2"
                  ></circle>
                </svg>
              ))
            : Array.from({ length: numSVGsPerRow }, (_, svgIndex) => (
                <svg
                  key={svgIndex}
                  height="50"
                  width="50"
                  style={{ margin: "5px" }}
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="10"
                    fill={getStatusColor(rowIndex, svgIndex)}
                  ></circle>
                  <circle
                    cx="25"
                    cy="25"
                    r="14"
                    stroke={getStatusColor(rowIndex, svgIndex)}
                    stroke-width="1"
                    fill="transparent"
                    opacity="0.6"
                  ></circle>
                  <circle
                    cx="25"
                    cy="25"
                    r="18"
                    stroke={getStatusColor(rowIndex, svgIndex)}
                    stroke-width="1"
                    fill="transparent"
                    opacity="0.4"
                  ></circle>
                  <circle
                    cx="25"
                    cy="25"
                    r="22"
                    stroke={getStatusColor(rowIndex, svgIndex)}
                    stroke-width="1"
                    fill="transparent"
                    opacity="0.2"
                  ></circle>
                </svg>
              ))}
        </div>
      ))}
    </div>
  );
};

export default Monitoringchart;
