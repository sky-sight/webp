document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = async function(event) {
        event.preventDefault(); // Prevent default form submission

        try {
            // Send a GET request to the URL
            const response = await fetch('https://api.exchangeratesapi.io/latest?base=USD');
            const data = await response.json();

            // Get currency from user input and convert to upper case
            const currency = document.querySelector('#currency').value.toUpperCase();

            // Get rate from data
            const rate = data.rates[currency];

            // Check if currency is valid:
            if (rate !== undefined) {
                // Display exchange rate on the screen
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
            } else {
                // Display error on the screen
                document.querySelector('#result').innerHTML = 'Invalid Currency.';
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };
});
