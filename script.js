function showMessage() {
    alert("Thank you for contacting Brew & Bean Cafe!");
}
function validateForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (name == "" || email == "" || message == "") {
        alert("Please fill all the fields.");
    }
    else {
        alert("Message sent successfully!");
    }
}
function showItem(item) {
    alert("You selected " + item);
}
function showImage(item) {
    alert("You selected " + item);
}
function changeText() {
    document.getElementById("welcome").innerHTML = "Thank you for visiting us!";
}
fetch("/api/cafe")
    .then(response => response.json())
    .then(data => {
        document.getElementById("backendMessage").innerText = data.message;
    });
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill all the fields.");
        return;
    }

    fetch("/api/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        });
}