import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "" // Adding an email field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the formData here, e.g., send it to an API
    console.log("Form Data:", formData);
  };

  return (
    <div className="container">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          placeholder="First Name"
          value={formData.fName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={formData.lName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
