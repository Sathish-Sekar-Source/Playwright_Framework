const { test, expect } = require('@playwright/test')

test('handle inputbox', async ({ page }) => {
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();

    //await page.locator("//input[@id='name']").fill('John Doe');
    await page.fill("//input[@id='name']", 'John Doe');
    await page.waitForTimeout(5000);

});