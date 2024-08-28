import React from "react";
import { useLocation } from "react-router-dom";

export function Home() {
  const homeData = useLocation();
  return (
    <div className="main-container">
      <div className="container flex flex-col items-center justify-center">
        <h1>Welcome to Interview Projects</h1>
        <p>{homeData.state}</p>
      </div>
    </div>
  );
}
