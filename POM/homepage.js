import { expect } from '@playwright/test';

export class Homepage {
    constructor(page) {
        this.page = page;
        this.url = 'https://petstore.octoperf.com/actions/Catalog.action';
    }
    // Navigate to the homepage
    async gotopage() {
        await this.page.goto(this.url);
    }

    // Click on the Sign In button
    async clickSignIn() {
        const signInButton = this.page.getByRole('link', { name: 'Sign In' })
        await signInButton.click();
        // Verify that the Sign In page is displayed
        const loginMessage = this.page.locator('text=Please enter your username and password.');
        await expect(loginMessage).toBeVisible();
    }

    // Click on the homepage logo to return to homepage
    async clickHomepageLogo() {
        const homepageLogoButton = this.page.locator('#LogoContent').getByRole('link');
        await homepageLogoButton.click();
    }

    // Search for a pet 
    async searchPet(petName) {
        const searchBox = this.page.locator('input[name="keyword"]');
        await searchBox.fill(petName);
        const searchButton = this.page.getByRole('button', { name: 'Search' });
        await searchButton.click();
        // Verify that the search results are displayed
        const searchResults = this.page.locator('text=' + petName);
        await expect(searchResults).toBeVisible();
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
