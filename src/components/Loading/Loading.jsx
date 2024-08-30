import React from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import "./Loading.css";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <LiaSpinnerSolid className="loading" size={45} color="#007bff" />
    </div>
  );
};
