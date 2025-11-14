import { test, expect } from '@playwright/test';

import { Homepage } from '../POM/homepage';

test('Navigate to URL and check homepage buttons', async ({ page }) => {
    const homepage = new Homepage(page);

    // Navigate to the homepage
    await homepage.gotopage();
    // Naviagate to Sign In page
    await homepage.clickSignIn();
    // Verify that the Sign In page is displayed
    await homepage.verifyLoginMessage();
    // Navigate to homepage
    await homepage.clickHomepageLogo();
    // Search for a pet
    await homepage.searchPet('Persian');   
    // Verify that the search results are displayed
    await homepage.verifySearchResults();
    // Navigate to homepage 
    await homepage.clickHomepageLogo();
    // Select a category from the sidebar 
    await homepage.clickCategorySidebar('BIRDS');
    // Select a category from the top menu
    await homepage.clickCategoryTopMenu('DOGS');
    // Navigate to shopping cart
    await homepage.clickShoppingCart();
    await homepage.clickHomepageLogo();

    // Select all categories 
    const categoriesSidebar = ['FISH', 'DOGS', 'REPTILES', 'CATS', 'BIRDS'];
    for (const category of categoriesSidebar) {
        // From sidebar
        await homepage.clickCategorySidebar(category);
        await homepage.clickHomepageLogo();
    }
    const categoriesTopMenu = ['FISH', 'DOGS', 'REPTILES', 'CATS', 'BIRDS'];
    for (const category of categoriesTopMenu) {
        // From Top menu
        await homepage.clickCategoryTopMenu(category);
    }

    // Go to information page
    await homepage.clickInfoLink();

    // Go back to homepage by clicking on the back browser button
    await homepage.navigateBack();

});
