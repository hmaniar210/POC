# 🧪 Jasmine to Cucumber BDD Migration – POC 

## 📌 Executive Summary

This Proof-of-Concept (POC) showcases the migration from Jasmine (technical test framework) to Cucumber with Gherkin syntax, aligning testing with Behavior-Driven Development (BDD). The new approach enhances collaboration, test clarity and more readability.

---

## 🎯 Objective & Scope

* **Goal**: Migrate Jasmine tests to Cucumber BDD for clearer, business-aligned testing.
* **Scope**: Core authentication flows (login, logout, password recovery).
* **Approach**: Run Jasmine and Cucumber tests in parallel to evaluate benefits.

---

## ✅ Key Outcomes

* Business-readable **Gherkin feature files**
* **Step definitions** and automated test **execution/reporting**
* Improved **documentation**, **traceability**, and **stakeholder collaboration**

---

## 🔍 Before vs After: Quick Comparison

| **Aspect**      | **Jasmine**      | **Cucumber BDD**           |
| --------------- | ---------------- | -------------------------- |
| Syntax          | JavaScript-based | Gherkin (natural language) |
| Audience        | Developers only  | Cross-functional teams     |
| Documentation   | Code comments    | Living documentation       |
| Maintainability | Tech-centric     | Business logic focused     |

---

## 💡 Key Benefits

* **🗣️ Collaboration**: Scenarios readable by business analysts and product owners
* **📖 Living Documentation**: Feature files double as specs
* **📌 Business Alignment**: Tests reflect real-world behavior and user requirements

---

## 🧪 Test Coverage (POC)

* **Authentication**: Login, logout, session handling
* **Validation**: Email format, field checks
* **Error Handling**: Invalid input scenarios
* **UI Feedback**: Basic form validations & messages

---

## 🧰 Tech Stack & Setup

* **Frontend**: HTML, CSS, JavaScript (ES6+)
* **Frameworks**: Jasmine, Cucumber.js + Gherkin
* **Tools**: Node.js, npm, HTML test reporting

### 🔧 Setup

```bash
git clone https://github.com/hmaniar210/POC.git
cd poc
npm install
npm run dev    # Start app
npm test       # Run all tests
```

---

## 📁 Structure Overview

```
/src         → App code
/tests
  ├── jasmine     → Legacy tests
  └── cucumber    → BDD tests
/reports     → HTML reports
```

---

## 👥 Project Summary

* Demonstrates shift to **BDD with business-focused testing**
* Enables **collaboration** across roles (QA, devs, product owners)
* Lays foundation for **maintainable**, traceable tests

> **Owner**: Harsh Maniar
> **Status**: Proof of Concept
> **Last Updated**: 7 July 2025

---

## 🔗 References

* [Cucumber.js Docs](https://cucumber.io/docs/cucumber/)
* [Gherkin Syntax](https://cucumber.io/docs/gherkin/)
* [BDD Practices](https://cucumber.io/docs/bdd/)

