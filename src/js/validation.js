// Validation module
const ValidationModule = {
  isValidEmail: function (email) {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isValidPassword: function (password) {
    return password && password.length >= 6;
  },

  validateLoginForm: function (email, password) {
    const errors = [];

    if (!email) {
      errors.push("Email is required");
    } else if (!this.isValidEmail(email)) {
      errors.push("Please enter a valid email address");
    }

    if (!password) {
      errors.push("Password is required");
    } else if (!this.isValidPassword(password)) {
      errors.push("Password must be at least 6 characters long");
    }

    return errors;
  },
};

// Export for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = ValidationModule;
}
