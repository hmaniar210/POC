const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");

Given("the following users exist:", function (dataTable) {
  this.users = dataTable.hashes();
});

Given("I am on the login page", function () {
  this.currentPage = "login";
  this.visibleForms = {
    login: true,
    forgotPassword: false,
    dashboard: false,
  };
});

Given("I am on the forgot password page", function () {
  this.currentPage = "forgotPassword";
  this.visibleForms = {
    login: false,
    forgotPassword: true,
    dashboard: false,
  };
});

Given("I have valid credentials", function () {
  this.credentials = {
    email: "admin@example.com",
    password: "admin123",
  };
});

Given("I am logged in and on the dashboard", function () {
  this.currentPage = "dashboard";
  this.visibleForms = {
    login: false,
    forgotPassword: false,
    dashboard: true,
  };
  this.user = {
    name: "Admin User",
    email: "admin@example.com",
  };
});

When("I navigate to the login page", function () {
  this.currentPage = "login";
  this.visibleForms = {
    login: true,
    forgotPassword: false,
    dashboard: false,
  };
});

When("I click the {string} link", function (linkText) {
  if (linkText === "Forgot Password?") {
    this.currentPage = "forgotPassword";
    this.visibleForms = {
      login: false,
      forgotPassword: true,
      dashboard: false,
    };
  } else if (linkText === "Back to Login") {
    this.currentPage = "login";
    this.visibleForms = {
      login: true,
      forgotPassword: false,
      dashboard: false,
    };
  }
});

When("I successfully log in", function () {
  this.currentPage = "dashboard";
  this.visibleForms = {
    login: false,
    forgotPassword: false,
    dashboard: true,
  };
  this.user = {
    name: "Admin User",
    email: "admin@example.com",
  };
});

When("I click the logout button", function () {
  this.currentPage = "login";
  this.visibleForms = {
    login: true,
    forgotPassword: false,
    dashboard: false,
  };
  this.user = null;
  this.formCleared = true;
});

When(
  "I enter email {string} and password {string}",
  function (email, password) {
    this.credentials = { email, password };
  }
);

When("I click the login button", function () {
  // Simulate authentication logic
  const user = this.users.find(
    (u) =>
      u.email === this.credentials.email &&
      u.password === this.credentials.password
  );

  if (user) {
    this.currentUser = user;
    this.currentPage = "dashboard";
    this.visibleForms = {
      login: false,
      forgotPassword: false,
      dashboard: true,
    };
    this.welcomeMessage = `Welcome, ${user.name}!`;
  } else {
    this.errorMessage = "Invalid email or password";
  }
});

When("I click the login button without entering credentials", function () {
  this.credentials = { email: "", password: "" };
  this.validationErrors = ["Email is required", "Password is required"];
});

Then("I should see the login form", function () {
  expect(this.visibleForms.login).to.be.true;
});

Then("I should not see the forgot password form", function () {
  expect(this.visibleForms.forgotPassword).to.be.false;
});

Then("I should not see the dashboard", function () {
  expect(this.visibleForms.dashboard).to.be.false;
});

Then("I should see the forgot password form", function () {
  expect(this.visibleForms.forgotPassword).to.be.true;
});

Then("I should not see the login form", function () {
  expect(this.visibleForms.login).to.be.false;
});

Then("I should see the dashboard", function () {
  expect(this.visibleForms.dashboard).to.be.true;
});

Then("I should see my user information", function () {
  expect(this.user).not.to.be.null;
  expect(this.user.name).to.equal("Admin User");
  expect(this.user.email).to.equal("admin@example.com");
});

Then("I should be redirected to the login page", function () {
  expect(this.currentPage).to.equal("login");
});

Then("the login form should be cleared", function () {
  expect(this.formCleared).to.be.true;
});

Then("I should be redirected to the dashboard", function () {
  expect(this.currentPage).to.equal("dashboard");
});

Then("I should see {string}", function (message) {
  expect(this.welcomeMessage).to.equal(message);
});

Then("I should see an error message {string}", function (errorMessage) {
  expect(this.errorMessage).to.equal(errorMessage);
});

Then("I should remain on the login page", function () {
  expect(this.currentPage).to.equal("login");
});

Then("I should see validation errors for required fields", function () {
  expect(this.validationErrors).to.include("Email is required");
  expect(this.validationErrors).to.include("Password is required");
});
