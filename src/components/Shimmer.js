import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(12)
        .fill("")
        .map((e) => (
          <div className="shimmer-card" key={Math.random()}></div>
        ))}
    </div>
  );
};

export default Shimmer;