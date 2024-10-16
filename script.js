document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();  // Prevents default form submission

    // Gather form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const carPreference = document.getElementById("carPreference").value;

    // Create a data object to send to the backend
    const data = { name, email, carPreference };

    // Send the data to the backend to save in a text file
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            // Redirect the user to the main page
            window.location.href = "/main.html";
        } else {
            alert('Error submitting form');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
