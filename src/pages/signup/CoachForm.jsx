import React, { useState } from "react";
import "./signup.css";

const CoachForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [universityEmail, setUniversityEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [sport, setSport] = useState("");
  const [association, setAssociation] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUniversityEmailChange = (event) => {
    setUniversityEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSchoolNameChange = (event) => {
    setSchoolName(event.target.value);
  };

  const handleSportChange = (event) => {
    setSport(event.target.value);
  };

  const handleAssociationChange = (event) => {
    setAssociation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit registration form
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <h1>Coach Registration</h1>
        <div>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="schoolName"
            placeholder="School Name"
            value={schoolName}
            onChange={handleSchoolNameChange}
          />
        </div>
        <div>
          <input
            type="email"
            id="universityEmail"
            placeholder="University Email"
            value={universityEmail}
            onChange={handleUniversityEmailChange}
          />
        </div>
        <div>
          <select id="sport" onChange={handleSportChange} value={sport}>
            <option value="" disabled selected>
              Choose a sport
            </option>
            <option value="Hunt Seat">Hunt Seat</option>
            <option value="Horsemanship">Horsemanship</option>
            <option value="Reining">Reining</option>
          </select>
        </div>
        <div>
          <select
            id="association"
            name="association"
            onChange={handleAssociationChange}
            value={association}
            required
          >
            <option value="">Select an association</option>
            <option value="IHSA">IHSA</option>
            <option value="NCAA">NCAA</option>
          </select>
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CoachForm;
