# Gestor Golf

Gestor Golf is a simple web application for tracking golf statistics. It has two independent areas:

- **Training Zone** – log practice sessions and drills.
- **Championship Zone** – register tournament results.

All data is stored in your browser's `localStorage` so information from each zone stays separate.

## Usage

Open `index.html` in your browser. You'll see a landing page with buttons for each zone.
Select **Training Zone** or **Championship Zone** to begin. Add notes in each area and click an entry to delete it.

## Development

1. Install dependencies (if your environment allows):
   ```bash
   npm install
   ```
2. Run the test suite:
   ```bash
   npm test -- --coverage
   ```

The project uses **Jest** for testing. A minimum of **90%** coverage is expected, but installation may fail if the environment has no internet access.

## Deployment

This project is prepared for deployment on **Netlify**. A GitHub Actions workflow `netlify.yml` automatically runs tests and deploys when changes are pushed to the `master` branch.

To use it, configure the following secrets in your repository settings:
- `NETLIFY_AUTH_TOKEN` – personal token from Netlify
- `NETLIFY_SITE_ID` – your Netlify site identifier

Alternatively, you can deploy manually with:
```bash
npm run build
npm run deploy
```
