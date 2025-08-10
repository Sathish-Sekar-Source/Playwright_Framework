const { test, expect } = require('@playwright/test')

test('handledropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple ways to select option from the dropdown
    //await page.locator('#country').selectOption({label: 'India'});
    //await page.locator('#country').selectOption('India');
    //await page.locator('#country').selectOption({value: 'india'});  // Using value attribute
    //await page.locator('#country').selectOption({index: 2}); // Using index
    //await page.selectOption('#country', 'India'); // Using selectOption method

    //const options = await page.locator('#country option'); //Approach 1
    //await expect(options).toHaveCount(10);

    //const options=await page.$$('#country option'); //Approach 2
    //console.log('Number of options in the dropdown:', options.length);
    //await expect(options.length).toBe(10);

    // check presence of value in the dropdown
    //const content = await page.locator('#country').textContent();
    //await expect(content.includes('India')).toBeTruthy();

    /*const options = await page.$$('#country option'); //Approach 3
    let status=false;

    for (const option of options) {
        //console.log(await option.textContent());
        let value = await option.textContent();

        if(value.includes('France')) {
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();
    */

    const options = await page.$$('#country option'); //Approach 3

    for (const option of options) {
        let value = await option.textContent();

        if(value.includes('India')) {
            await page.selectOption('#country', value.trim());
            break;
        }
    }

    await page.waitForTimeout(2000);

});
