const { test, expect } = require('@playwright/test')

test('handle inputbox', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('textarea[name="text1"]').fill('Welcome to automation'); // or [name="text1"]
    
    //Ctrl + A
    await page.keyboard.press('Control+A')
    //Ctrl + C
    await page.keyboard.press('Control+C')
    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Ctrl + V
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000);

});
