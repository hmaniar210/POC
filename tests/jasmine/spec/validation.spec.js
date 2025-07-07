describe("Validation Functions", function () {
  describe("isValidEmail function", function () {
    it("should return true for valid email addresses", function () {
      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      expect(isValidEmail("test@example.com")).toBe(true);
      expect(isValidEmail("user.name@domain.co.uk")).toBe(true);
      expect(isValidEmail("admin@company.org")).toBe(true);
    });

    it("should return false for invalid email addresses", function () {
      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      expect(isValidEmail("invalid-email")).toBe(false);
      expect(isValidEmail("test@")).toBe(false);
      expect(isValidEmail("@example.com")).toBe(false);
      expect(isValidEmail("test@example")).toBe(false);
    });

    it("should return false for empty or null email", function () {
      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      expect(isValidEmail("")).toBe(false);
      expect(isValidEmail(null)).toBe(false);
      expect(isValidEmail(undefined)).toBe(false);
    });
  });

  describe("userExists function", function () {
    beforeEach(function () {
      this.users = [
        { email: "admin@example.com", password: "admin123" },
        { email: "user@example.com", password: "user123" },
      ];
    });

    it("should return true when user exists", function () {
      function userExists(email) {
        return this.users.some((u) => u.email === email);
      }

      expect(userExists.call(this, "admin@example.com")).toBe(true);
      expect(userExists.call(this, "user@example.com")).toBe(true);
    });

    it("should return false when user does not exist", function () {
      function userExists(email) {
        return this.users.some((u) => u.email === email);
      }

      expect(userExists.call(this, "nonexistent@example.com")).toBe(false);
    });
  });
});
