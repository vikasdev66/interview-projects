import React from "react";
import { useLocation } from "react-router-dom";

export function Home() {
  const homeData = useLocation();
  return (
    <div className="main-container">
      <div className="container flex flex-col items-center justify-center">
        <h1>{homeData.state}</h1>
        <p>Passing data using react router dom</p>
      </div>
    </div>
  );
}
