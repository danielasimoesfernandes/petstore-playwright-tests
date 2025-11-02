import { expect } from "@playwright/test";

export class Login {
    constructor(page) {
        this.page = page; 
    }

    async fillLoginForm(username, password) {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
    }

    async submitLoginForm() {
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async assertLoginSuccessful() {
        await expect(this.page).toHaveURL("https://petstore.octoperf.com/actions/Catalog.action");
        await expect(this.page.locator('text=Welcome')).toBeVisible();
    }

    async assertLoginFailed(expectedErrorMessage) {
        const errorMessage = this.page.getByText('Invalid username or password')
        await expect(errorMessage).toBeVisible();
    }
}
