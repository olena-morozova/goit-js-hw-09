const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: "",
    message: ""
};
const form = document.querySelector(".feedback-form");
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onFormInput);

function onFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}

function onFormInput(event) {
console.log(event.target.name, event.target.value.trim());

    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");

form.elements.email.value = savedData.email || "";
form.elements.message.value = savedData.message || "";

