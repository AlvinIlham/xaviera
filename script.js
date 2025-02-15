function sendMessage() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    if (name && message) {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("message");
        messageContainer.innerHTML = `<strong>${name}:</strong> <p>${message}</p>`;
        document.getElementById("messages").appendChild(messageContainer);
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
    }
}
function autoSlide(sliderId) {
    const slider = document.querySelector(`#${sliderId} .slider`);
    let index = 0;
    setInterval(() => {
        index = (index + 1) % slider.children.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
}
autoSlide("slider1");
autoSlide("slider2");
autoSlide("slider3");
autoSlide("slider4");