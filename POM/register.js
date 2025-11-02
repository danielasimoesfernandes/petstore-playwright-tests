import { expect } from '@playwright/test';

export class Register {
    constructor(page) {
        this.page = page;
        this.url = 'https://petstore.octoperf.com/actions/Account.action?newAccountForm=';
    }

    // Click on the Register Now! button
    async clickRegisterNow() {
        const registerNowButton = this.page.getByRole('link', { name: 'Register Now!' });
        await registerNowButton.click();
        // Verify that the registration page is displayed
        await this.page.waitForURL("https://petstore.octoperf.com/actions/Account.action?newAccountForm=");
    }

    // User account information
    async fillUserAccountFields() {
        const userID = 'user' + Date.now();
        const passwordField = 'Password123!';
        const repeatPasswordField = 'Password123!';
        await this.page.fill('input[name="username"]', userID);
        await this.page.fill('input[name="password"]', passwordField);
        await this.page.fill('input[name="repeatedPassword"]', repeatPasswordField);

        this.userID = userID; // Store the userID for later use
        this.password = passwordField;
    }

    // Account information
    async fillAccountInformationFields() {
        await this.page.fill('input[name="account.firstName"]', 'Amélia');
        await this.page.fill('input[name="account.lastName"]', 'Soares');
        await this.page.fill('input[name="account.email"]', 'amelia.soares@gmail.com');
        await this.page.fill('input[name="account.phone"]', '912345678');
        await this.page.fill('input[name="account.address1"]', '123 Main St');
        await this.page.fill('input[name="account.address2"]', 'Apt 4');
        await this.page.fill('input[name="account.city"]', 'Dublin');
        await this.page.fill('input[name="account.state"]', 'Dublin');
        await this.page.fill('input[name="account.zip"]', '12345');
        await this.page.fill('input[name="account.country"]', 'Ireland');
    }

    // Profile information
    async fillProfileInformationFields() {
        await this.page.selectOption('select[name="account.languagePreference"]', 'english');
        await this.page.selectOption('select[name="account.favouriteCategoryId"]', 'CATS');
    }

    // Checkboxes
    async checkCheckboxes() {
        const myListCheckbox = this.page.locator('input[name="account.listOption"]');
        await myListCheckbox.check();
        const myBannerCheckbox = this.page.locator('input[name="account.bannerOption"]');
        await myBannerCheckbox.check();
    }

    // Submit registration
    async submitRegistration() {
        const saveAccountButton = this.page.getByRole('button', { name: 'Save Account Information' });
        await saveAccountButton.click();
        // Verify that the registration was successful
        await this.page.waitForURL("https://petstore.octoperf.com/actions/Catalog.action");
        console.log('User registered successfully with username: ' + this.userID + ' and password: ' + this.password);
    }
}

