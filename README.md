![Cypress Tests](https://github.com/mariele-de-bona-qa/qa-engineering-lab/actions/workflows/cypress-tests.yml/badge.svg)

![API Tests](https://github.com/mariele-de-bona-qa/qa-engineering-lab/actions/workflows/api-tests.yml/badge.svg)

![Performance Tests](https://github.com/mariele-de-bona-qa/qa-engineering-lab/actions/workflows/performance-tests.yml/badge.svg)

# QA Engineering Lab 🚀

Laboratório prático de Engenharia de Qualidade focado em automação de testes, APIs, performance testing e integração contínua.

Este repositório foi criado para consolidar estudos, experimentos, boas práticas e projetos relacionados à Quality Engineering moderna, utilizando ferramentas amplamente adotadas no mercado.

---

# 🎯 Objetivos

* Construir automações escaláveis e reutilizáveis
* Demonstrar boas práticas de QA moderno
* Validar APIs e fluxos críticos de negócio
* Implementar testes de performance
* Estruturar pipelines de CI/CD
* Evoluir continuamente em Quality Engineering

---

# ⚡ Stack Principal

* Cypress
* Postman
* K6
* JavaScript
* Azure DevOps
* GitHub Actions
* SQL
* Power BI

---

# 📂 Estrutura do Projeto

```bash
qa-engineering-lab/
│
├── docs/
├── architecture/
├── cypress/
├── api/
├── performance/
├── flaky-tests/
├── snippets/
├── ci-cd/
└── .github/workflows/
```
---

# 🏗️ QA Architecture

## Quality Engineering Architecture

![QA Architecture](architecture/qa-architecture.png)

---

# ⚙️ CI/CD Pipeline Flow

![Pipeline Flow](architecture/pipeline-flow.png)

---

# 🧪 Test Strategy Diagram

![Test Strategy](architecture/test-strategy-diagram.png)


---

# 🧪 Automação E2E

Estrutura de automação utilizando Cypress com foco em:

* Page Objects
* Fixtures
* Custom Commands
* API Intercepts
* Session Handling
* Retry Strategies
* Reports automatizados

### Cenários implementados

* Login
* Cadastro
* Checkout
* Sessão expirada
* Fluxos críticos E2E

---

# 🔌 API Testing

Estratégias de testes de APIs REST utilizando Postman e Newman.

### Cobertura

* Validação de status code
* JSON Schema Validation
* Autenticação via token
* Variáveis de ambiente
* Fluxos críticos
* Reports automatizados

---

# 🚀 Performance Testing

Testes de performance utilizando K6.

### Tipos de testes

* Smoke Tests
* Load Tests
* Stress Tests
* Spike Tests

### Métricas analisadas

* Response Time
* Throughput
* Error Rate
* Thresholds
* Performance Bottlenecks

---

# ⚙️ CI/CD

Pipelines automatizados utilizando GitHub Actions para execução contínua dos testes.

### Pipelines

* Cypress Tests
* API Tests
* Performance Tests

---
# ▶️ How to Run

## Install Dependencies

```bash
npm install
```

---

## Run Cypress Tests

```bash
npm run cy:run
```

---

## Open Cypress UI

```bash
npm run cy:open
```

---

## Run K6 Smoke Tests

```bash
npm run k6:smoke
```

---

## Run K6 Load Tests

```bash
npm run k6:load
```

---

## Run K6 Stress Tests

```bash
npm run k6:stress
```

---

## Run K6 Spike Tests

```bash
npm run k6:spike
```
---
# 📊 Quality Engineering

Este laboratório segue conceitos modernos de Quality Engineering:

* Continuous Testing
* Shift Left Testing
* Quality Metrics
* DevOps Culture
* Test Automation Strategy
* Scalable QA Architecture

---

# 📈 Próximas Implementações

* Allure Reports
* Docker Integration
* Visual Testing
* Contract Testing
* Accessibility Testing
* Parallel Execution
* Dashboard de métricas QA

---

# 👩‍💻 Author

## Mariele De Bona

QA Engineer focada em:

* Test Automation
* API Testing
* Performance Engineering
* Continuous Quality

### 🔗 LinkedIn

https://www.linkedin.com/in/mariele-de-bona-qa
