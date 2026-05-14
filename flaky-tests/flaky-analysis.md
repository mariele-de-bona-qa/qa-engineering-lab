# Flaky Tests Analysis

## Objective

Demonstrate common causes of flaky automated tests and apply strategies to improve test reliability, stability and maintainability in Cypress automation projects.

---

# What is a Flaky Test?

A flaky test is an unstable automated test that produces inconsistent results, sometimes passing and sometimes failing without any change in the application code.

Flaky tests reduce trust in automation pipelines and negatively impact Continuous Integration processes.

---

# Common Causes of Flaky Tests

## Fixed Waits

Using arbitrary waits creates unstable and slow tests.

### Bad Example

```javascript
cy.wait(5000)
```

---

## Unstable Selectors

Selectors based on CSS classes or dynamic elements tend to break frequently.

### Bad Example

```javascript
cy.get('.btn-primary')
```

### Better Approach

```javascript
cy.get('[data-test=login-button]')
```

---

## Race Conditions

Tests may execute before the application finishes loading required elements or API responses.

---

## Environment Instability

* Slow APIs
* Network latency
* Shared environments
* Inconsistent test data

---

## Poor Test Isolation

Tests depending on previous executions can generate unreliable results.

---

# Flaky Test Example

## Problematic Scenario

```javascript
cy.visit('https://www.saucedemo.com')

cy.wait(5000)

cy.get('[data-test=login-button]').click()
```

## Problems

* Slow execution
* Unnecessary waiting time
* Instability in different environments

---

# Improved Approach

## Stable Scenario

```javascript
cy.get('[data-test=login-button]')
  .should('be.visible')
  .and('be.enabled')
  .click()
```

---

# Improvements Applied

* Removed fixed waits
* Added visibility assertions
* Added enabled state validation
* Used stable selectors
* Improved synchronization with application behavior

---

# Best Practices to Avoid Flaky Tests

## Use Stable Selectors

Prefer:

```javascript
[data-test=element]
```

Instead of:

```javascript
.class-name
```

---

## Avoid Arbitrary Waits

Prefer automatic waiting mechanisms and assertions.

---

## Validate API Responses

Use intercepts for better synchronization.

### Example

```javascript
cy.intercept('GET', '/api/products')
  .as('getProducts')

cy.wait('@getProducts')
```

---

## Isolate Test Data

Each test should be independent and reusable.

---

## Keep Tests Deterministic

Tests should always produce the same result under the same conditions.

---

# Impact of Flaky Tests

* Reduced confidence in automation
* False negatives
* Pipeline instability
* Increased maintenance cost
* Slower deployments

---

# Key Takeaways

Reliable automation depends on:

* Stable synchronization
* Predictable environments
* Proper selectors
* Reusable architecture
* Continuous maintenance

Reducing flaky tests is essential for scalable and trustworthy QA automation.
