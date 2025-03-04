const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: "",
    message: ""
};
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onFormInput);

function onFormSubmit(event) {
    event.preventDefault();
    
    if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData.email = "";
  formData.message = "";
}


function onFormInput(event) {
    formData[event.target.name] = event.target.value.trim();
      
     if (formData.email || formData.message) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } else {
        localStorage.removeItem(STORAGE_KEY);
    }
}

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");

form.elements.email.value = savedData.email || "";
form.elements.message.value = savedData.message || "";

formData.email = savedData.email || "";
formData.message = savedData.message || "";

