import React, { useState } from "react";
import { Button } from "antd";
import { ProgressStep } from "./ProgressStep";

export const ProgressStepUse = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="main-container">
      <div className="container">
        <div>
          <ProgressStep steps={steps} currentStep={currentStep} />
          <div className="Button-group flex gap-5 justify-center">
            <Button
              type="primary"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            <Button
              type="primary"
              onClick={nextStep}
              disabled={currentStep === steps.length}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
