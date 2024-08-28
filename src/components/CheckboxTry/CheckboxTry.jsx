import { useState } from "react";
import EventDelegation from "./EventDelegation.jsx";
import NormalCheckboxPlay from "./NormalCheckboxPlay.jsx";
import { names } from "../../data.js";
import "./CheckboxTry.css";

export function CheckboxTry() {
  const [checkedIds, setCheckedIds] = useState([]);
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedIds([...checkedIds, value]);
      return;
    }
    setCheckedIds(checkedIds.filter((id) => id !== value));
  };
  const handleAllChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setCheckedIds(names);
      return;
    }
    setCheckedIds([]);
  };
  const handleDivClick = (e) => {
    const { value, checked } = e.target;
    if (value === "selectAll") {
      if (checked) {
        setCheckedIds(names);
        return;
      }
      setCheckedIds([]);
      return;
    }
    if (checked) {
      setCheckedIds([...checkedIds, value]);
      return;
    }
    setCheckedIds(checkedIds.filter((id) => id !== value));
  };
  return (
    <div className="main-container">
      <div className="container flex justify-around">
        <div className="checkboxTry-container">
          <h3>Normal Checkbox Play</h3>
          <NormalCheckboxPlay
            names={names}
            checkedIds={checkedIds}
            handleAllChange={handleAllChange}
            handleChange={handleChange}
          />
        </div>
        <div className="checkboxTry-container">
          <h3>EventDelegation</h3>
          <EventDelegation
            names={names}
            checkedIds={checkedIds}
            handleDivClick={handleDivClick}
          />
        </div>
      </div>
    </div>
  );
}
