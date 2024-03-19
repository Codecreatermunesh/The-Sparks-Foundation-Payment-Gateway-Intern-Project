document.addEventListener("DOMContentLoaded", function () {
    var options = {
        key: 'pl_KEwnpzeYnhDoTF', // Replace with your Razorpay API Key
        amount: 1000, // Example amount in paise (1000 paise = Rs. 10)
        currency: 'INR',
        name: 'NSS IIT Patna Foundation',
        description: 'Donation',
        image: '/img/logo.png', // Replace with your organization's logo
        handler: function (response) {
            alert('Payment successful');
            // Handle payment success here
        },
        prefill: {
            name: 'Your Name',
            email: 'your.email@example.com',
            contact: 'Your Contact Number'
        },
        theme: {
            color: '#4CAF50' // Change the button color
        }
    };

    var rzp = new Razorpay(options);

    document.getElementById('payNowBtn').onclick = function () {
        rzp.open();
    };
});
