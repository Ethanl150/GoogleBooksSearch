const socket = io.connect("http://localhost:3001");

const handleClick = e => {
    const element = event.target;
    if (element.tagName === "BUTTON" && element.classList.contains("saveBtn")) {
        const id = "id" + element.id
        socket.emit("saved", id)
    }
}

document.addEventListener("click", handleClick)

socket.on("saved", data => {
    const alert = document.querySelector("[data-id=" + data + "]");
    alert.innerHTML = '<div class="alert alert-success mt-3" role="alert"><h4 class="alert-heading text-center">The book was successfully saved.</h4></div>'

    setTimeout(() => {
        alert.innerHTML = ""
    }, 1000)
})