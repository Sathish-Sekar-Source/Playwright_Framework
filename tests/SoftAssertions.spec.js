const { test, expect } = require('@playwright/test')

test('SoftAssertionsTest', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    
    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL('https://demoblaze.com/');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

});