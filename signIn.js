let signUp = document.getElementById("signupBtn");
let signIn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameId");
let title = document.getElementsByClassName("heading");

signIn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signUp.classList.add("btn");
    signIn.classList.remove("btn");
}


signUp.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signUp.classList.remove("btn");
    signIn.classList.add("btn");
}



document.querySelector('form').addEventListener('submit', function (event) {
    let isValid = true;
    const inputs = document.querySelectorAll('.inputBox input');
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false; input.style.borderColor = 'red';
        }
        else {
            input.style.borderColor = '#ccc';
        }
    });
    if (!isValid) {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});

function togglePassword() {
    const password = document.getElementById('password');
    if (password.type === 'password') {
        password.type = 'text';
    }
    else {
        password.type = 'password';
    }
}


document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('your-server-endpoint', { method: 'POST', body: formData }).then(response => response.json()).then(data => {
        console.log(data);
        alert('Form submitted successfully!');
    }).catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });
});