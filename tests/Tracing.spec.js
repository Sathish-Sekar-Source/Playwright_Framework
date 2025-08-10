//const { test, expect } = require('@playwright/test')
import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
    await page.goto('https://demoblaze.com/')
    //Login
    await page.getByRole('link', {name:'Log in'}).click()
    await page.locator("//input[@id='loginusername']").fill('sathish_sekar');
    await page.locator("//input[@id='loginpassword']").fill('Sathish143');
    await page.getByRole('button', {name:'Log in'}).click()

    await expect(page.locator('#logout')).toBeVisible();

});