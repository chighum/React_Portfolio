import React, { useState, useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact Me";
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    setFormState("");
    alert(
      `Hello ${formState.name} and thank you for your message, unfortunately I have not hooked this form up to the backend so you will have to use one of the links at the bottom of the page in order to get in touch with me`
    );
  };

  return (
    <div>
      <h1>Fill out the form to contact me:</h1>
      <form className="form">
        <input
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Type your message here"
        />
        <button
          type="button"
          onClick={handleFormSubmit}
          onChange={handleInputChange}
        >
          Submit
        </button>
      </form>
      <p>
        This form doesn't actually work yet, you can use the links at the bottom
        to get in touch with me for now
      </p>
    </div>
  );
}

export default Contact;
