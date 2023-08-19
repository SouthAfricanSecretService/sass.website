document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var applicationData = {};

    // Convert form data to a plain object
    formData.forEach(function(value, key) {
        applicationData[key] = value;
    });

    // Convert the data to a JSON string
    var jsonData = JSON.stringify(applicationData);

    // Simulate saving the data to a file (for demonstration purposes)
    saveToFile(jsonData);

    // Clear the form after submission (for demonstration purposes)
    this.reset();
});

function saveToFile(data) {
    // In a real-world scenario, you would use server-side code to save the data securely.
    // This example simulates writing to a file on the client-side for demonstration purposes.
    var fileContents = data + '\n\n';
    var blob = new Blob([fileContents], { type: 'text/plain' });

    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'applications.txt';
    a.textContent = 'Download applications.txt';
    
    // Display a link to download the file (for demonstration purposes)
    document.body.appendChild(a);
}
