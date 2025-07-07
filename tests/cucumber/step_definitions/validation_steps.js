const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");

Given("I have an email address {string}", function (email) {
  this.email = email;
});

Given("I have an empty email address", function () {
  this.email = "";
});

Given("the following users are registered:", function (dataTable) {
  this.registeredUsers = dataTable.hashes();
});

When("I validate the email format", function () {
  // More strict email regex that rejects consecutive dots
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const hasConsecutiveDots = /\.\./.test(this.email);
  this.isValidEmail = emailRegex.test(this.email) && !hasConsecutiveDots;
});

When("I check if the user exists", function () {
  this.userExists = this.registeredUsers.some((u) => u.email === this.email);
});

Then("the email should be considered valid", function () {
  expect(this.isValidEmail).to.be.true;
});

Then("the email should be considered invalid", function () {
  expect(this.isValidEmail).to.be.false;
});

Then("the user should exist in the system", function () {
  expect(this.userExists).to.be.true;
});

Then("the user should not exist in the system", function () {
  expect(this.userExists).to.be.false;
});
