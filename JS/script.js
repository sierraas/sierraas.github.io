document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting traditionally

    // Get user input
    const userInput = document.getElementById('userInput').value;

    // Create a new element
    const newElement = document.createElement('p');
    newElement.textContent = userInput;

    // Append the new element to the output div
    document.getElementById('output').appendChild(newElement);

    // Reset the form
    document.getElementById('inputForm').reset();
});