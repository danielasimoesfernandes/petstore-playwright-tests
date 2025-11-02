import { test, expect } from '@playwright/test';

import { Homepage } from '../POM/homepage';
import { Register } from '../POM/register';

test ('Navigate to Registration page from Homepage', async ({ page }) => {
    const homepage = new Homepage(page);
    const register = new Register(page);

    // Navigate to the homepage
    await homepage.gotopage();
    // Click on the Sign In button
    await homepage.clickSignIn();
    // Click on the Register Now! button
    await register.clickRegisterNow();
    // Fill User account fields 
    await register.fillUserAccountFields();
    // Fill Account information fields
    await register.fillAccountInformationFields();
    // Fill Profile information fields
    await register.fillProfileInformationFields();
    // Submit the registration
    await register.submitRegistration();
});