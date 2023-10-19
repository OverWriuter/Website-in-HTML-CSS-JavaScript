
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert(" Please complete all form fields.");
        return false;
    }
  
    return true;
}

var button = document.getElementById("submit-button");
button.addEventListener("click", function() {
    alert("Dziękujemy za wysłanie formularza!");
});
