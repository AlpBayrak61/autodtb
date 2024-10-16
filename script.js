document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();  // Prevents default form submission

    // Gather form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const carPreference = document.getElementById("carPreference").value;

    // Create a data object to send to the backend
    const data = { name, email, carPreference };

    // Send the data to the backend to save in a text file
    fetch('http://localhost:3000/submit', {  // Ensure correct port is used
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  // This sends data as JSON string
    })
    .then(response => response.json())
    .then(data => {
        if (response.ok) {
            window.location.href = "/main.html";
        } else {
            console.error('Server error:', data.message);
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
});
