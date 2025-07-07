// Authentication module
const AuthModule = {
  users: [
    {
      id: 1,
      email: "admin@example.com",
      password: "admin123",
      name: "Admin User",
      lastLogin: "2024-07-07 10:30:00",
    },
    {
      id: 2,
      email: "user@example.com",
      password: "user123",
      name: "Regular User",
      lastLogin: "2024-07-06 15:45:00",
    },
  ],

  authenticate: function (email, password) {
    return (
      this.users.find((u) => u.email === email && u.password === password) ||
      null
    );
  },

  userExists: function (email) {
    return this.users.some((u) => u.email === email);
  },

  updateLastLogin: function (email) {
    const user = this.users.find((u) => u.email === email);
    if (user) {
      user.lastLogin = new Date().toISOString().slice(0, 19).replace("T", " ");
    }
  },
};

// Export for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = AuthModule;
}
