const { test, expect } = require('@playwright/test')

test('Date Picker', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.fill('#datepicker', '08-15-2025')

    //date picker
    const year = "2024"
    const month = "March"
    const date = "25"

    await page.click('#datepicker')

    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        if (currentYear == year && currentMonth == month) {
            break;

        }
        //await page.locator('a[title="Next"]').click();  //Click Next
        await page.locator('a[title="Prev"]').click();   //Click Previous
    }

    const dates=await page.$$('.ui-state-default')

    /* //date selection using loop
    for(const dt of dates)
    {
        if(await dt.textContent()==date){
            await dt.click();
            break;
        }

    }
    */

    //date seleciton without loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)


    await page.waitForTimeout(5000);


});
