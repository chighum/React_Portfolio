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
    <div className="container">
      <h3 className="mb-3">I would love to hear from you!</h3>
      <div className="row">
        <div className="col-md-12">
          <form
            className="form"
            id="contact-form"
            method="POST"
            action="send"
            enctype="multipart/form-data"
          >
            <div className="row">
              <div className="col-sm-6 mb-3">
                <div className="form-floating">
                  <input
                    name="name"
                    id="name"
                    className="form-control"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <label for="name">Name</label>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-floating">
                  <input
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <label for="email">Email</label>
                </div>
              </div>
            </div>
            <div className="form-floating my-3">
              <input
                placeholder="Subject"
                id="subject"
                name="subject"
                type="text"
                className="form-control"
                required
              />
              <label for="subject">Subject</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                name="message"
                id="message"
                className="form-control"
                onChange={handleInputChange}
                placeholder="Message"
                required
                style={{ height: 300 }}
              ></textarea>
              <label for="message">Message</label>
            </div>
            <button type="submit" value="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
