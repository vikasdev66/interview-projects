import React from "react";
import "./ProgressStep.css";

export const ProgressStep = ({ steps, currentStep }) => {
  return (
    <div className="progress-container">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${currentStep >= index + 1 ? "active" : ""}`}
        >
          <div className="step-number">{index + 1}</div>
          <div className="step-title">{step}</div>
        </div>
      ))}
    </div>
  );
};
