import React, { useState } from "react";
import "./signup.css";

const StudentAthleteForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    graduationDate: "",
    agreedToTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agreedToTerms: e.target.checked });
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <h1>Student-Athlete Registration</h1>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          id="graduationDate"
          name="graduationDate"
          placeholder="Graduation Date"
          value={formData.graduationDate}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <div className="terms">
          <div>
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleCheckboxChange}
              required
            />
            <span>I agree to the terms and conditions.</span>
          </div>
        </div>
        <button className="form-submit" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default StudentAthleteForm;
