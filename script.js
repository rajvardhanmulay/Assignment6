const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    message.innerHTML = `Student ${name} Registered Successfully!`;

    form.reset();
});