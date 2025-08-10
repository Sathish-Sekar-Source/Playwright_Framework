const { test, expect } = require('@playwright/test')

test('AssertionsTest', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible();

    const searchBoxElement = await page.locator('#small-searchterms');
    await expect(searchBoxElement).toBeEnabled();

    const genderMaleRadioButton = await page.locator('#gender-male');
    await genderMaleRadioButton.click();
    await expect(genderMaleRadioButton).toBeChecked();

    const newsletterCheckbox = await page.locator('#Newsletter');
    await expect(newsletterCheckbox).toBeChecked();

    const registerButton = await page.locator('#register-button');
    await expect(registerButton).toHaveAttribute('type', 'submit');

    await expect(await page.locator('.page-title h1')).toHaveText('Register'); //full text match
    await expect(await page.locator('.page-title h1')).toContainText('Reg'); //partial text match

    const emailInput = await page.locator('#Email');
    await emailInput.fill('sathishsekar@gmail.com');
    await expect(emailInput).toHaveValue('sathishsekar@gmail.com'); //check if the input is empty
    
    /*const options= await page.locator('#DateOfBirthDay');
    await expect(options).toHaveCount(32); //check if the dropdown has 32 options

    expect(value).not.toBeNull(); //check if the value is not null
    expect(locator).not.toHaveCount(0); //check if the locator has at least one element
    */

    

})