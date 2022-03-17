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
      <div className="container">
        <h1>Fill out the form to contact me:</h1>
        <div className="row">
          <div className="col-md-12">
            <form
              className="form"
              id="contact-form"
              method="POST"
              action="send"
              enctype="multipart/form-data"
            >
              <div className="form-floating mb-3">
                <div className="row">
                  <div className="col-md-6">
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
                  <div className="col-md-6">
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
                    <div id="emailHelp" class="form-text">
                      I'll never share your email with anyone else.
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-3">
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
              <div className="form-floating">
                <input
                  name="message"
                  id="message"
                  className="form-control"
                  onChange={handleInputChange}
                  type="text"
                  rows="5"
                  placeholder="Type your message here"
                  required
                />
                <label for="message">Type your message here</label>
              </div>
              <button
                type="button"
                onClick={handleFormSubmit}
                onChange={handleInputChange}
              >
                Submit
              </button>
            </form>
            <p>
              This form doesn't actually work yet, you can use the links at the
              bottom to get in touch with me for now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
