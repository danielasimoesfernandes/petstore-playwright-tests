import { expect } from '@playwright/test';

export class SearchProducts {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator('button[type="submit"]');
    this.results = page.locator('.search-results');
  }

  async searchForProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async getSearchResults() {
    return this.results;
  }
}