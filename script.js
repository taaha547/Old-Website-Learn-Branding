const button = document.getElementById("toggleButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
        button.textContent = "Hide Hello Taaha";
    } else {
        message.classList.add("hidden");
        button.textContent = "Show Hello Taaha";
    }
});
