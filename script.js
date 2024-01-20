const scriptURL =
  "https://script.google.com/macros/s/AKfycbyO7auhR15x3O_MKDU8PqJr0OXfFt7y8KOHnct8rCHAuuDI4wMXPAezo-wKCx3sNvRy/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Subscribing!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
