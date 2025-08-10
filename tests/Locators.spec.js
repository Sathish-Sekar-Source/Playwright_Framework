//const { test, expect } = require('@playwright/test')
import {test, expect} from '@playwright/test';

test('Locators', async ({ page }) => {
    await page.goto('https://demoblaze.com/');

    //click on login button - property
    //await page.locator('#login2').click();
    await page.click('id=login2');

    //provide username - CSS
    //await page.locator('#loginusername').fill('sathish');
    await page.fill('#loginusername', 'sathish_sekar');

    //provide password - XPath
    await page.fill("input[id='loginpassword']", 'Sathish143');

    //click on login button - XPath
    await page.click("//button[normalize-space()='Log in']");

    //assert login success
    const loginSuccessMessage = await page.locator('#nameofuser').textContent();
    console.log('Login success message: ', loginSuccessMessage);
    await expect(page.locator('#nameofuser')).toHaveText('Welcome sathish_sekar');

    //verify logout link present
    const logoutLink = await page.locator('#logout2').isVisible();
    console.log('Logout link is visible: ', logoutLink);
    await expect(page.locator('#logout2')).toBeVisible();

    await page.close();


})