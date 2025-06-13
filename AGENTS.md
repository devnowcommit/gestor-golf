# AGENT Instructions

This repository will host the source code for a web application that lets the owner keep track of all golf statistics. The site will have two distinct sections:

1. **Training Zone** – records practice sessions, drills and personal training metrics.
2. **Championship Zone** – logs tournament results and competition-specific statistics.

The goal is to implement the application and deploy it on a free hosting service such as Netlify.

## Planning Stages

1. **Architecture Design**
   - Choose the web stack (e.g. React for front-end, optional Node.js or static site if no backend is required).
   - Define data models for training sessions and championships. Each zone should store statistics separately.
   - Decide how to persist data (local storage, static JSON files, external DB, etc.).

2. **Initial Setup**
   - Initialize project structure and add dependencies.
   - Configure build tools or framework if used.
   - Add placeholder pages for Training and Championship zones.

3. **Feature Development**
   - Implement forms to input and edit statistics for each zone.
   - Build views to review historical records and compute basic stats.
   - Ensure zones do not mix statistics but allow navigation between them.

4. **UI/UX Enhancements**
   - Style the application for clarity and ease of use.
   - Add navigation, charts or tables to display stats.

5. **Deployment Preparation**
   - Set up build scripts.
   - Provide `netlify.toml` or equivalent configuration for Netlify.
   - Document environment variables or special steps.

6. **Deployment**
   - Deploy the site to Netlify.
   - Confirm that both zones operate correctly in production.

## Repository Guidelines

- Keep documentation up to date, especially `README.md` with build and deploy instructions.
- If additional instructions are needed for subdirectories, create new `AGENTS.md` files in those folders.

## Testing Policy

- All new features must be developed using Test-Driven Development (TDD).
- The preferred testing framework for this project is **Jest**, suitable for a React and Node.js stack.
- Aim for a minimum code coverage of **90%**.
- Run coverage checks with `npm test -- --coverage` or an equivalent script to verify compliance.
