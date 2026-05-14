# Flaky Tests Analysis

## Objective

Demonstrate how unstable automated tests can occur and how to improve reliability using better Cypress practices.

---

## What is a Flaky Test?

A flaky test is a test that sometimes passes and sometimes fails without changes in the application code.

---

## Common Causes

- Fixed waits
- Slow network responses
- Unstable selectors
- Race conditions
- Environment instability
- Poor test isolation

---

## Bad Practice Example

```javascript
cy.wait(5000)
