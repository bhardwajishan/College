import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RingChart = () => {
  const percentage1 = 62; // For Percentage ring
  const percentage2 = 76; // For Status ring

  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      <div style={{ width: 120 }}>
        <CircularProgressbar
          value={percentage1}
          text={`${percentage1}%`}
          styles={buildStyles({
            textColor: "#FF5C5C", // Text color
            pathColor: "#FF5C5C", // Ring color
            trailColor: "#FFECEC", // Background ring
          })}
        />
        <div style={{ textAlign: "center", marginTop: "10px" }}>Average</div>
      </div>
      <div style={{ width: 120 }}>
        <CircularProgressbar
          value={percentage2}
          text={`${percentage2}%`}
          styles={buildStyles({
            textColor: "#5C9CFF",
            pathColor: "#5C9CFF",
            trailColor: "#E7F3FF",
          })}
        />
        <div style={{ textAlign: "center", marginTop: "10px" }}>Project</div>
      </div>
    </div>
  );
};

export default RingChart;
