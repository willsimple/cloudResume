// Define the key used to store the count in the user's browser
const storageKey = 'pageVisitCount';

// Get the HTML element where the count will be displayed
const counterElement = document.getElementById('visitor-count');

// 1. Retrieve the current count from localStorage
let currentCount = localStorage.getItem(storageKey);

// 2. Increment the count
if (currentCount === null || isNaN(parseInt(currentCount))) {
    // If it's the first visit, start the count at 1
    currentCount = 1;
} else {
    // Otherwise, increment the existing count
    currentCount = parseInt(currentCount) + 1;
}

// 3. Store the new count back into localStorage
localStorage.setItem(storageKey, currentCount.toString());

// 4. Update the HTML element to show the new count
if (counterElement) {
    counterElement.textContent = currentCount;
} else {
    // This console error helps if you forget to add the 'visitor-count' span in your HTML
    console.error("The element with ID 'visitor-count' was not found. Check your HTML.");
}