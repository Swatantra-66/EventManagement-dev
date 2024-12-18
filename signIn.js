let signUp = document.getElementById("signupBtn");
let signIn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameId");
let title = document.getElementsByClassName("heading");



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

document.getElementById('signup-form').addEventListener('submit',
    function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch(this.action,
            {
                method: this.method, body: formData
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            }).then(data => {
                console.log(data);
                alert('Form submitted successfully!');
            }).catch(error => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            });
    });


function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
    console.error(error);
} function renderButton() {
    gapi.signin2.render('customBtn',
        {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSuccess,
            'onfailure': onFailure
        });
}
gapi.load('auth2', function () {
    gapi.auth2.init();
    renderButton();
});






document.getElementById('passwordBox').addEventListener('input',
    function () {
        const strength = document.getElementById('password-strength');
        const value = this.value;
        let strengthValue = '';
        if (value.length > 8 && /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && /[!@#$%^&*]/.test(value)) {
            strengthValue = 'Strong';
            strength.style.color = 'green';
        }
        else if (value.length > 5) {
            strengthValue = 'Medium';
            strength.style.color = 'orange';
        } else {
            strengthValue = 'Weak';
            strength.style.color = 'red';
        }
        strength.textContent = strengthValue;
    });




function showSignIn() {
    document.getElementById('nameBox').style.display = 'none';
    document.getElementById('phoneBox').style.display = 'none';
    document.getElementById('emailBox').style.display = 'block';
    document.getElementById('passwordBox').style.display = 'block';
    document.getElementsById('Icon1') = 'none';
    document.getElementsById('Icon2') = 'block';
    document.getElementsById('Icon3') = 'none';
    document.getElementsById('Icon4') = 'block';



}


function showSignUp() {
    document.getElementById('nameBox').style.display = 'block';
    document.getElementById('phoneBox').style.display = 'block';
    document.getElementById('emailBox').style.display = 'block';
    document.getElementById('passwordBox').style.display = 'block';

}

window.onload = function () {
    showSignUp();
};let signUp = document.getElementById("signupBtn");
let signIn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameId");
let title = document.getElementsByClassName("heading");



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

document.getElementById('signup-form').addEventListener('submit',
    function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch(this.action,
            {
                method: this.method, body: formData
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            }).then(data => {
                console.log(data);
                alert('Form submitted successfully!');
            }).catch(error => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            });
    });


function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
    console.error(error);
} function renderButton() {
    gapi.signin2.render('customBtn',
        {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSuccess,
            'onfailure': onFailure
        });
}
gapi.load('auth2', function () {
    gapi.auth2.init();
    renderButton();
});






document.getElementById('passwordBox').addEventListener('input',
    function () {
        const strength = document.getElementById('password-strength');
        const value = this.value;
        let strengthValue = '';
        if (value.length > 8 && /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && /[!@#$%^&*]/.test(value)) {
            strengthValue = 'Strong';
            strength.style.color = 'green';
        }
        else if (value.length > 5) {
            strengthValue = 'Medium';
            strength.style.color = 'orange';
        } else {
            strengthValue = 'Weak';
            strength.style.color = 'red';
        }
        strength.textContent = strengthValue;
    });




function showSignIn() {
    document.getElementById('nameBox').style.display = 'none';
    document.getElementById('phoneBox').style.display = 'none';
    document.getElementById('emailBox').style.display = 'block';
    document.getElementById('passwordBox').style.display = 'block';
    document.getElementsById('Icon1') = 'none';
    document.getElementsById('Icon2') = 'block';
    document.getElementsById('Icon3') = 'none';
    document.getElementsById('Icon4') = 'block';

}


function showSignUp() {
    document.getElementById('nameBox').style.display = 'block';
    document.getElementById('phoneBox').style.display = 'block';
    document.getElementById('emailBox').style.display = 'block';
    document.getElementById('passwordBox').style.display = 'block';

}

window.onload = function () {
    showSignUp();
};
