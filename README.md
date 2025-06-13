# Gestor Golf

Gestor Golf will track all your golf statistics in one place. It has two main sections:

- **Training Zone**: Record practice sessions, drills and personal metrics.
- **Championship Zone**: Log tournament results and competition statistics.

Each area keeps its data separate so practice information stays distinct from championship performance.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Testing and Coverage

Run the test suite with:
```bash
npm test
```
To generate a coverage report use:
=======
This project aims to provide a simple web application for managing golf statistics, split between a **Training Zone** and a **Championship Zone**.

## Testing Policy

All features must be developed following Test-Driven Development (TDD) guidelines. The repository uses **Jest** as the preferred testing framework. A minimum test coverage of **90%** is required. Run coverage checks using:

```bash
npm test -- --coverage
```