let formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");

form.addEventListener("input", event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
  }
});

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert("Fill all fields of the form");
    return;
  }
  console.log(formData);
  localStorage.removeItem("feedback-form-state");
  formData = { email: "", message: "" };
  form.reset();
});