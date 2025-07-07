describe("Authentication System", function () {
  beforeEach(function () {
    this.users = [
      {
        id: 1,
        email: "admin@example.com",
        password: "admin123",
        name: "Admin User",
      },
      {
        id: 2,
        email: "user@example.com",
        password: "user123",
        name: "Regular User",
      },
    ];
  });

  describe("authenticate function", function () {
    it("should return user object when valid credentials are provided", function () {
      function authenticate(email, password) {
        return (
          this.users.find(
            (u) => u.email === email && u.password === password
          ) || null
        );
      }

      const result = authenticate.call(this, "admin@example.com", "admin123");
      expect(result).not.toBeNull();
      expect(result.name).toBe("Admin User");
      expect(result.email).toBe("admin@example.com");
    });

    it("should return null when invalid credentials are provided", function () {
      function authenticate(email, password) {
        return (
          this.users.find(
            (u) => u.email === email && u.password === password
          ) || null
        );
      }

      const result = authenticate.call(
        this,
        "admin@example.com",
        "wrongpassword"
      );
      expect(result).toBeNull();
    });

    it("should return null when user does not exist", function () {
      function authenticate(email, password) {
        return (
          this.users.find(
            (u) => u.email === email && u.password === password
          ) || null
        );
      }

      const result = authenticate.call(
        this,
        "nonexistent@example.com",
        "password"
      );
      expect(result).toBeNull();
    });
  });
});
