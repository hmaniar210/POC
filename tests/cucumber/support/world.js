const { setWorldConstructor } = require("@cucumber/cucumber");
const { JSDOM } = require("jsdom");

class CustomWorld {
  constructor() {
    // Set up DOM environment for testing
    const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
    global.document = dom.window.document;
    global.window = dom.window;

    // Initialize test data
    this.users = [];
    this.currentUser = null;
    this.currentPage = "login";
    this.visibleForms = {
      login: false,
      forgotPassword: false,
      dashboard: false,
    };
    this.errors = [];
    this.messages = [];
  }

  // Helper methods
  setCurrentPage(page) {
    this.currentPage = page;
  }

  setVisibleForm(form, visible) {
    this.visibleForms[form] = visible;
  }

  addError(error) {
    this.errors.push(error);
  }

  addMessage(message) {
    this.messages.push(message);
  }

  clearMessages() {
    this.errors = [];
    this.messages = [];
  }
}

setWorldConstructor(CustomWorld);
