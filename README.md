---

## **2️⃣ Playwright README (`playwright-tests/README.md`)**

```markdown
# Playwright Tests - Petstore Demo Website

End-to-end tests for the [Petstore Demo Website](https://petstore.octoperf.com) using **Playwright**.

## Current Coverage

- Homepage navigation
- User registration
- Login (valid & invalid)

## Planned Page Objects (to match Cypress coverage)
- `SearchProducts.js` – search functionality
- `CartPage.js` – shopping cart actions
- `CheckoutPage.js` – checkout process
- `ProductDetails.js` – individual product actions

Tests follow the Page Object Model (POM) pattern.

## Getting Started

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run tests
npx playwright test
