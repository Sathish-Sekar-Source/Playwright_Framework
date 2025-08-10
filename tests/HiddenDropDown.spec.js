const { test, expect } = require('@playwright/test')

test('hiddenDropdown', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.click("//span[normalize-space()='PIM']");

    await page.waitForSelector("//div[normalize-space()='Job Title']//following-sibling::div//i");
    await page.click("//div[normalize-space()='Job Title']//following-sibling::div//i");

    await page.waitForSelector("//div[normalize-space()='Job Title']//following-sibling::div//i");
    const options= await page.$$("//div[@role='listbox']//span");

    for(const option of options) {
        const jobTitle = await option.textContent();
        console.log(jobTitle);
        if(jobTitle.includes('QA Engineer')) {
            await option.click();
            break;
        }
    }
    
});
