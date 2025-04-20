const Em_rejex = /^(?!.*@(gamil\.com|gmail\.c(m|mo|on)|hotmail\.c(m|mo|on)|yahoo\.c(m|mo|on)|icloud\.c(m|mo|on))).+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Pass_rejex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
const name_Input = document.getElementById("name");
const email_Input = document.getElementById("email");
const pass_Input = document.getElementById("password");
const submit = document.getElementById("submit");
const errorPassword = document.getElementById("password-errors");
const errorName = document.getElementById("name-errors");
const errorEmail = document.getElementById("email-errors");


submit.addEventListener("click", () => {
    // Clear previous errors
    errorName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorPassword.innerHTML = "";

    let hasError = false;

    // Name validation
    if (name_Input.value === "") {
        errorName.innerHTML = `<p>Name is required!</p>`;
        hasError = true;
    } else if (name_Input.value.length >= 15) {
        errorName.innerHTML = `<p>Name must be less than 15 characters!</p>`;
        hasError = true;
    }

    // Email validation
    if (email_Input.value === "") {
        errorEmail.innerHTML = `<p>Email is required!</p>`;
        hasError = true;
    } else if (!Em_rejex.test(email_Input.value)) {
        errorEmail.innerHTML = `<p>Email is invalid!</p>`;
        hasError = true;
    }

    // Password validation
    if (pass_Input.value === "") {
        errorPassword.innerHTML = `<p>Password is required!</p>`;
        hasError = true;
    } else if (!Pass_rejex.test(pass_Input.value)) {
        errorPassword.innerHTML = `<p>Password must have 8+ chars, A-Z, a-z, 0-9 & symbol.</p>`;
        hasError = true;
    }

    // If no errors, proceed
    if (!hasError) {
        let users = JSON.parse(localStorage.getItem("Users")) || [];

        // Check if email already exists
        let isExist = users.some(user => user.email === email_Input.value);
        if (isExist) {
            errorEmail.innerHTML = `<p>Email already registered!</p>`;
            return;
        }

        // Add new user
        users.push({
            name: name_Input.value,
            email: email_Input.value,
            password: pass_Input.value
        });

        // Save back to localStorage
        localStorage.setItem("Users", JSON.stringify(users));

        localStorage.setItem("currentUser", JSON.stringify({
            name: name_Input.value,
        }));

        // Show success message
        Swal.fire({
            title: `Congratulations ${name_Input.value}!`,
            text: "Account created successfully ❤️",
            icon: "success",
        }).then(()=>{
            setTimeout(()=>{
                window.location.href="index2.html";
            },500)
        });
 
        name_Input.value = "";
        pass_Input.value = "";
        email_Input.value = "";
      
    }
});

// localStorage.clear()