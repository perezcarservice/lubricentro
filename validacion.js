const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function(event) {
    let errors = [];

    if (nameInput.value === "") {
        errors.push("El nombre es obligatorio");
    }
    if (emailInput.value === "") {
        errors.push("El correo electronico es obligatorio");
    }
    if (messageInput.value === "") {
        errors.push("El mensaje es obligatorio");
    }

    if (errors.length > 0 ) {
        event.preventDefault();
        const errorDiv = document.createElement("div");
        errorDiv.className = "error";
        errorDiv.innerText = errors.join(", ");
        form.insertBefore(errorDiv, form.firstChild);
    }

});