# Test Pyramid

## Objective

Apply the Test Pyramid strategy to balance execution speed, reliability and test coverage.

---

# Pyramid Structure

## Unit Tests

Fast and isolated validations executed during development.

### Focus

* Business rules
* Methods
* Components

---

## API Tests

Validation of integrations and service contracts.

### Focus

* REST APIs
* Authentication
* Response validation

---

## E2E Tests

Validation of critical user flows.

### Focus

* Login
* Checkout
* Registration
* Critical business journeys

---

# Benefits

* Faster feedback
* Lower maintenance cost
* Greater reliability
* Scalable automation

---

# Tools

* Cypress
* Postman
* K6

---

# Best Practices

* Avoid excessive E2E tests
* Prioritize API validations
* Reduce flaky tests
* Maintain reusable automations
