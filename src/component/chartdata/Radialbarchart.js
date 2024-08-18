import React from "react";

const RadialBarChart = ({ segmentData }) => {
  return (
    <div className="chart-container">
      <svg className="compliance-chart-svg" width="459" height="323">
        <g transform="translate(229.5, 161.5)">
          {segmentData.map((segment, index) => (
            <g key={index} className="arc">
              <text
                opacity="1"
                textAnchor="end"
                y={segment.textY}
                x={segment.textX}
                style={segment.textStyle}
              >
                {segment.label}
              </text>
              <text
                opacity="1"
                y={segment.textY}
                x={segment.textX + 10}
                style={segment.textStyle}
              >
                {segment.percentage}%
              </text>
              {/* <path fill={segment.fillColor} d={segment.arcPath} /> */}
            <>
          <path
            key={index}
            d={segment.arcPath}
            fill={segment.fillColor}
          />
          <path
            key={`${index}-second`}
            d={segment.secondArcPath}
            fill={segment.secondFillColor}
          />
          </>
              
             
              {/* <path fill={segment.secondFillColor} d={segment.secondArcPath} /> */}
            </g>
          ))}
        </g>
      </svg>






    </div>
  );
};

export default RadialBarChart;
