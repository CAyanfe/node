// Import the 'generate' function from the 'generate-password' package.
const generatePassword = require("generate-password");

// Configuration for generating passwords.
const passwordOptions = {
  length: 12, // Password length
  numbers: true, // Include numbers
  symbols: true, // Include symbols
  lowercase: true, // Include lowercase letters
  uppercase: true, // Include uppercase letters
};

// Function to generate and console.log a random password.
function generateAndLogPassword() {
  const password = generatePassword.generate(passwordOptions);
  console.log("Generated Password:", password);
}

// Call the function to generate and log a password.
generateAndLogPassword();
