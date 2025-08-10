const { test, expect } = require('@playwright/test')

test('handledropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('.multiselect').click(); //click on the dropdown

    //1
    //const options=await page.locator('ul>li label input')
    //await expect(options).toHaveCount(11); //check if there are 11 options

    //2
    //const options=await page$$('ul>li label input')
    //await expect(options.length).toBe(11); //check if there are 11 options

    //3 select options from dropdown
    const options=await page.$$('ul>li label');
    for (let option of options) {
        const value = await option.textContent();
        //console.log("value is "+value);
        if(value.includes('JavaScript') || value.includes('Java')) {
            await option.click(); //click on the option
        }
    }

    //4 deselect options from dropdown same as 3rd step

})