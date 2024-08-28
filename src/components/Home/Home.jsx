import React from "react";
import { useLocation } from "react-router-dom";

export function Home() {
  const homeData = useLocation();
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="text-center">Welcome to React Interview Projects!</h1>
        <p className="text-justify">
          Dive into a collection of carefully curated React interview projects
          designed to help you master the skills and ace your next job
          interview. Whether you’re preparing for your first interview or
          refining your expertise, you’ll find practical examples and challenges
          that cover everything from fundamental concepts to advanced
          techniques. Start exploring and boost your React skills today!
        </p>
        <p className="hidden">{homeData.state}</p>
      </div>
    </div>
  );
}
