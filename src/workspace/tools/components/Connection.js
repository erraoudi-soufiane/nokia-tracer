import React from "react";

function Connection({ startX, startY, endX, endY }) {
  return (
    <svg>
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
}

export default Connection;
