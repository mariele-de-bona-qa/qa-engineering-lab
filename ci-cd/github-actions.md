# GitHub Actions & CI/CD 🚀

## Objective

This document describes the Continuous Integration and Continuous Delivery (CI/CD) strategy implemented in the QA Engineering Lab project using GitHub Actions.

The purpose of this setup is to simulate a modern Quality Engineering workflow with automated quality validation across E2E, API and Performance testing layers.

---

# What is GitHub Actions?

GitHub Actions is a native CI/CD platform integrated with GitHub repositories that allows automated workflows to be triggered by events such as:

* Pushes
* Pull Requests
* Scheduled executions
* Manual triggers

It enables teams to automate testing, validation and deployment pipelines.

---

# CI/CD Strategy

The QA Engineering Lab follows a Continuous Testing approach where automated validations are executed continuously during the software lifecycle.

---

# Pipeline Flow

```text
Developer Push
      ↓
GitHub Actions Trigger
      ↓
Install Dependencies
      ↓
Run Cypress E2E Tests
      ↓
Run API Tests with Newman
      ↓
Run Performance Tests with K6
      ↓
Generate Reports
      ↓
Publish Results
```

---

# Testing Layers

## E2E Automation

Tool:

* Cypress

Purpose:

* Validate critical user flows
* Ensure application stability
* Prevent regression issues

---

## API Testing

Tools:

* Postman
* Newman

Purpose:

* Validate REST APIs
* Ensure contract integrity
* Validate authentication and response structure

---

## Performance Testing

Tool:

* K6

Purpose:

* Measure system performance
* Simulate concurrent users
* Detect bottlenecks and instability

---

# Repository Structure

```bash
.github/
└── workflows/
    ├── cypress-tests.yml
    ├── api-tests.yml
    └── performance-tests.yml
```

---

# Cypress Workflow

## File

```bash
.github/workflows/cypress-tests.yml
```

## Example

```yaml
name: Cypress Tests

on:
  push:
    branches: [main]

  pull_request:
    branches: [main]

jobs:
  cypress-tests:

    runs-on: ubuntu-latest

    steps:

      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        run: npx cypress run
```

---

# API Workflow

## File

```bash
.github/workflows/api-tests.yml
```

## Example

```yaml
name: API Tests

on:
  push:
    branches: [main]

jobs:
  api-tests:

    runs-on: ubuntu-latest

    steps:

      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Install Newman
        run: npm install -g newman

      - name: Run Postman Collection
        run: |
          newman run api/collections/api-tests.postman_collection.json \
          -e api/environments/dev.postman_environment.json
```

---

# Performance Workflow

## File

```bash
.github/workflows/performance-tests.yml
```

## Example

```yaml
name: Performance Tests

on:
  workflow_dispatch:

jobs:
  performance-tests:

    runs-on: ubuntu-latest

    steps:

      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Install K6
        run: |
          sudo gpg -k
          curl -s https://dl.k6.io/key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/k6-archive-keyring.gpg
          echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
          sudo apt update
          sudo apt install k6

      - name: Run Smoke Test
        run: k6 run performance/smoke/smoke-test.js
```

---

# Quality Gates

The pipeline should fail when:

* Critical E2E flows fail
* APIs return unexpected status codes
* Performance thresholds are exceeded
* Required validations are not completed

---

# Reports & Artifacts

The pipeline architecture supports automated report generation.

## Planned Reports

* Mochawesome Reports
* Newman Reports
* K6 Metrics
* Screenshots
* Execution Logs

---

# Benefits of CI/CD in QA

## Faster Feedback

Automated pipelines reduce manual validation time.

---

## Continuous Quality

Testing becomes part of the development lifecycle.

---

## Early Bug Detection

Defects are identified before production deployment.

---

## Increased Reliability

Automated validations improve release confidence.

---

# Future Improvements

## Planned Enhancements

* Allure Reports
* Parallel Execution
* Docker Integration
* Scheduled Pipelines
* Slack Notifications
* Quality Dashboards
* Test Metrics Automation

---

# Engineering Principles Applied

* Continuous Testing
* Shift Left Testing
* Scalable Automation
* Quality Engineering
* DevOps Culture
* Reliable Test Architecture

---

# Final Considerations

CI/CD pipelines are essential for modern Quality Engineering practices.

Automated quality validation increases reliability, scalability and delivery confidence while supporting continuous software evolution.
