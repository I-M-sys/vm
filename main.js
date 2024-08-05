document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("icloud-login-form");
    
    // Hardcoded values
    const password = "your_icloud_password";
    const phoneNumber = "your_phone_number";
    const twoFactorSecret = "your_2fa_secret_key";
    
    // Autofill the form fields
    document.getElementById("password").value = password;
    document.getElementById("phone_number").value = phoneNumber;
    document.getElementById("two_factor_secret").value = twoFactorSecret;
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Submit the form to the endpoint
        form.action = "https://example.com/endpoint"; // Replace with your endpoint URL
        form.method = "post";
        form.submit();
    });
});