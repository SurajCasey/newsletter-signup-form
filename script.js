// Getting references from the elements
const mainContainer = document.querySelector('.main-container');
const successPage = document.querySelector('.success-page');
const subscribeButton = document.querySelector('.btn-1');
const dismissButton = document.querySelector('.btn-2');
const emailInput = document.querySelector('#email')
const emailLabel= document.querySelector('label[for="email"]');
const errorMessage = document.querySelector('.error-message');



// Function to validate email
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    return emailRegex.test(email);
};

// Function to handle subscription
const handleSubscription = () => {
    const email = emailInput.value.trim(); // Get the email value
    
    if (isValidEmail(email)) {
        errorMessage.style.display = 'none'; // Hide error message
        mainContainer.style.display = 'none'; // Hide main container
        successPage.style.display = 'flex'; // Show success page

    } else {
        errorMessage.style.display = 'inline'; // Show error message
        emailInput.style.color = 'hsl(4, 100%, 67%)';
        emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
        emailInput.style.backgroundColor = 'rgba(255, 87, 34, 0.15)';
    }
};

// Add event listener to the subscribe button
subscribeButton.addEventListener('click', handleSubscription);

// Add event listener to the dismiss button
dismissButton.addEventListener('click', () => {
    successPage.style.display = 'none';
    mainContainer.style.display = 'flex';
});