/*
https://playwright.dev/docs/locators#locate-by-role

page.getByAltText() - to locate an element by its alt attribute, usually image.
page.getByPlaceholder() - to locate an element by its placeholder text, usually input fields.
page.getByRole() - to locate an element by its role, such as button, link, etc.
page.getByText() - to locate an element by its text content.

page.getByLabel() - to locate an element by its label text, usually form labels.  in inspect element search <label
page.getByTitle() - to locate an element by its title attribute, often used for tooltips or additional information.
page.getByTestId() - to locate an element by a custom data attribute, often used for testing purposes.

*/

const { test, expect } = require('@playwright/test')
//import {test, expect} from '@playwright/test';

test('Built-inLocators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo= await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button', {type: 'submit'}).click()

    const name=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
    await expect(await page.getByText(name)).toBeVisible()

    expect(await page.getByText('Admin')).toBeVisible()
    
})