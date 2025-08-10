//const { test, expect } = require('@playwright/test')
import { test, expect } from '@playwright/test'

test('Home Page Test', async ({ page }) => {
    await page.goto('https://demoblaze.com/')
    //Login
    await page.click("//a[@id='login2']");
    await page.locator("//input[@id='loginusername']").fill('sathish_sekar');
    await page.locator("//input[@id='loginpassword']").fill('Sathish143');
    await page.click("button[onclick='logIn()']");

    await expect(page.locator('#logout')).toBeVisible();

});