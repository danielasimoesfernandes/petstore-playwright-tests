import { test, expect } from "@playwright/test";

import { Login } from "../POM/login";
import { Homepage } from "../POM/homepage";

test('Login with valid credentials', async ({ page }) => {
    const homepage = new Homepage(page);
    const login = new Login(page);

    await homepage.gotopage();
    await homepage.clickSignIn();
    await login.fillLoginForm('user1762122615442', 'Password123!');
    await login.submitLoginForm();
    await login.assertLoginSuccessful();
});

test('Login with invalid credentials', async ({ page }) => {
    const homepage = new Homepage(page);
    const login = new Login(page);

    await homepage.gotopage();
    await homepage.clickSignIn();
    await login.fillLoginForm('wrongUser', 'WrongPassword!');
    await login.submitLoginForm();
    await login.assertLoginFailed();
});
