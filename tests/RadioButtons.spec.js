const { test, expect } = require('@playwright/test')

test('handle radio button', async ({ page }) => {
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');
    
    //Radio Buttons
    await page.locator("//input[@value='option2']").check(); //male
    await expect(page.locator("//input[@value='option2']")).toBeChecked();
    await expect(page.locator("//input[@value='option2']").isChecked()).toBeTruthy(); //male

    await expect(page.locator("//input[@value='option1']").isChecked()).toBeFalsy(); //female
    await expect(page.locator("//input[@value='option1']")).not.toBeChecked();

});