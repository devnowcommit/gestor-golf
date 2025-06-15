# Gestor Golf

Gestor Golf is a simple web application for tracking golf statistics. It keeps two independent areas:

- **Training Zone** – log practice sessions and drills.
- **Championship Zone** – register tournament results.

All data is stored in your browser's `localStorage` so information from each zone stays separate.

## Usage

Open `index.html` in your browser. Use the navigation buttons to switch between zones. Add notes in each area and click an entry to delete it.

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
