const form = document.getElementById("contact-form");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};
