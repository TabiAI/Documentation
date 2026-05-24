# Engineering Documentation

Welcome to the central documentation for Travelbase Core Engine. This directory contains our engineering governance,
system blueprints, and platform runbooks.

Our documentation is powered by **Mintlify** and treated exactly like production code: it lives in this repository, is
versioned via git, and requires peer review for any structural modifications.

---

## The Core Documentation Matrix

Our documentation footprint is split into three foundational modules. Before contributing to the engine, you are
required to understand the rules outlined within these specs.

### 1. Engineering Governance

* **Location:** `docs/governance/`
* **The Rule:** This is the absolute law of the repository. It defines our strict transactional boundaries, mandatory
  multi-tenant query structures, and PR sign-off requirements.
* **The Goal:** To ensure every developer writes code that protects data integrity and prevents cross-tenant leakage.

### 2. System Architecture

* **Location:** `docs/architecture/`
* **The Rule:** This module charts our foundational infrastructure layout—how our Fastify core handles multi-tenant
  identity mapping, our append-only USD ledger mechanics, and our isolated gateway integration boundaries.
* **The Goal:** To map system constraints and data lifecycles cleanly without bloating individual endpoint descriptions.

### 3. API Reference

* **Location:** `docs/api-reference/`
* **The Rule:** This directory manages our OpenAPI routing manifests. Do not manually type endpoint tables or JSON
  payloads into raw markdown.
* **The Goal:** Project V8 automatically compiles typescript routing schemas into native OpenAPI specs, ensuring our
  client-facing references can never drift from the underlying codebase.

---

## Local Development & Preview

To preview the documentation portal locally exactly how it renders in production, use the Mintlify CLI engine.

### Prerequisites

Ensure you have the Mintlify CLI installed globally on your machine:

```bash
npm i -g mintlify
```

### Running the Preview Server

Navigate to this directory and ignite the local development server:

```Bash
cd docs
mintlify dev
```