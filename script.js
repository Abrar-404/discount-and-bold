// Get references to the input fields and the calculate button
const originalPriceInput = document.getElementById("originalPrice");
const discountPercentageInput = document.getElementById("discountPercentage");
const calculateButton = document.getElementById("calculateButton");
const discountedPriceOutput = document.getElementById("discountedPrice");

// Add an event listener to the calculate button
calculateButton.addEventListener("click", calculateDiscountedPrice);

// Function to calculate and display the discounted price
function calculateDiscountedPrice() {
    const originalPrice = parseFloat(originalPriceInput.value);
    const discountPercentage = parseFloat(discountPercentageInput.value);

    if (!isNaN(originalPrice) && !isNaN(discountPercentage)) {
        const discountAmount = (discountPercentage / 100) * originalPrice;
        const discountedPrice = originalPrice - discountAmount;

        discountedPriceOutput.textContent = `Discounted Price: $${discountedPrice.toFixed(2)}`;
    } else {
        discountedPriceOutput.textContent = "Please enter valid numbers.";
    }
}
