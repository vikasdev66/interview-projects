import React, { useState } from "react";
import "./FormTry.css"

export function FormTry() {
  const [formData, setFormData] = useState({
    fName: "",
    email: "",
    age: "",
    phoneNumber: "",
    gender: "",
    hobby: [],
    language: "",
  });
  const [savedFormData, setSavedFromData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedFromData((prev) => [...prev, formData]);
    document.getElementsByName("gender").forEach((redio) => {
      redio.checked = false;
    });
    setFormData({
      fName: "",
      email: "",
      age: "",
      phoneNumber: "",
      gender: "",
      hobby: [],
      language: "",
    });
    console.log(savedFormData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "hobby") {
      if (checked) {
        setFormData((prev) => ({ ...prev, hobby: [...prev.hobby, value] }));
        return;
      }
      setFormData((prev) => ({
        ...prev,
        hobby: prev.hobby.filter((id) => id !== value),
      }));
    }
  };
  return (
    <div className="main-container">
      <section className="container">
        <header>Registration Form</header>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              name="fName"
              placeholder="Enter full name"
              className="input-text"
              value={formData.fName}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="input-text"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              className="input-text"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              className="input-text"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label>Gender</label>
            <br />
            <div className="radio-box">
              <label htmlFor="male">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />{" "}
                Female
              </label>
            </div>
          </div>
          <div className="input-box">
            <label>Hobby</label>
            <br />
            <div className="checkbox-box">
              <label htmlFor="photography">
                <input
                  type="checkbox"
                  name="hobby"
                  id="photography"
                  value="photography"
                  checked={formData.hobby.includes("photography")}
                  onChange={handleCheckboxChange}
                />{" "}
                Photography
              </label>
              <label htmlFor="cricket">
                <input
                  type="checkbox"
                  name="hobby"
                  id="cricket"
                  value="cricket"
                  checked={formData.hobby.includes("cricket")}
                  onChange={handleCheckboxChange}
                />{" "}
                Cricket
              </label>
              <label htmlFor="football">
                <input
                  type="checkbox"
                  name="hobby"
                  id="football"
                  value="football"
                  checked={formData.hobby.includes("football")}
                  onChange={handleCheckboxChange}
                />{" "}
                Football
              </label>
              <label htmlFor="badminton">
                <input
                  type="checkbox"
                  name="hobby"
                  id="badminton"
                  value="badminton"
                  checked={formData.hobby.includes("badminton")}
                  onChange={handleCheckboxChange}
                />{" "}
                Badminton
              </label>
            </div>
          </div>
          <div className="input-box">
            <label>Language</label>
            <select
              name="language"
              className="input-text"
              value={formData.language}
              onChange={handleChange}
            >
              <option value="" selected>
                Please select language
              </option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
            </select>
          </div>
          <div className="btn-container">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
