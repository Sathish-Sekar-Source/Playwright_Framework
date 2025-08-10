const { test, expect } = require('@playwright/test')

test('handle checkboxes', async ({ page }) => {
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    //single checkbox
    await page.locator("//input[@id='monday' and @type='checkbox']").check();
    //await page.check("//input[@id='monday' and @type='checkbox']");

    expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();

    expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy();

    //Multiple checkboxes
    const checkboxLocators = [
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='tuesday' and @type='checkbox']",
        "//input[@id='wednesday' and @type='checkbox']",
    ];

    for (const locator of checkboxLocators) {  // select multiple checkboxes
        await page.locator(locator).check();
    }

    for (const locator of checkboxLocators) {
        if (await page.locator(locator).isChecked()) {  // unselect multiple checkboxes
            await page.locator(locator).uncheck();
        }
    }

    await page.waitForTimeout(2000);

});