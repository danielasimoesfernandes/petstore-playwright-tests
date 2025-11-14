import { expect } from '@playwright/test';

export class Homepage {
    constructor(page) {
        this.page = page;
        this.url = 'https://petstore.octoperf.com/actions/Catalog.action';
        this.signInButton = this.page.getByRole('link', { name: 'Sign In' });
        this.loginMessage = this.page.locator('text=Please enter your username and password.');
        this.searchBox = this.page.locator('input[name="keyword"]');
        this.homepageLogoButton = this.page.locator('#LogoContent').getByRole('link');
        this.searchButton = this.page.getByRole('button', { name: 'Search' });
        this.searchResults = this.page.locator('text=' + petName);
    }
    // Navigate to the homepage
    async gotopage() {
        await this.page.goto(this.url);
    }

    // Click on the Sign In button
    async clickSignIn() {
        await this.signInButton.click();
    }

    // Verify that the Sign In page is displayed
    async verifyLoginMessage() {
        await expect(this.loginMessage).toBeVisible();
    }

    // Click on the homepage logo to return to homepage
    async clickHomepageLogo() {
        await this.homepageLogoButton.click();
    }

    // Search for a pet 
    async searchPet(petName) {
        await this.searchBox.fill(petName);
        await this.searchButton.click();
    }

     // Verify that the search results are displayed
        async verifySearchResults() {
            await expect(this.searchResults).toBeVisible();
        }

    // Select a category from the side bar 
    async clickCategorySidebar(category) {
        // Monta o href dinâmico
        const categoryLink = this.page.locator(`#Sidebar a[href*="categoryId=${category}"]`);
        await categoryLink.click();
    }

    // Select a category from the top menu 
    async clickCategoryTopMenu(category) {
        // Monta o href dinâmico
        const categoryLink = this.page.locator(`#QuickLinks a[href*="categoryId=${category}"]`);
        await categoryLink.click();
    }

    // Navigate to shopping cart
    async clickShoppingCart() { 
        const shoppingCartButton = this.page.locator('img[name="img_cart"]');
        await shoppingCartButton.click();
         // Verify that the shopping cart page is displayed
        const shoppingCartTitle = this.page.locator('text= Shopping Cart');
        await expect(shoppingCartTitle).toBeVisible();
    }

    // Click on the info link
    async clickInfoLink() {
        const infoLink = this.page.locator('a[href*="help.html"]');
        await infoLink.click();
    }

    // Back browser navigation
    async navigateBack() {
        await this.page.goBack();
    }
}
