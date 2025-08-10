//const { test, expect } = require('@playwright/test')
import { test, expect } from '@playwright/test'

let page;

test.beforeAll(async ({browser})=>{
    page=await browser.newPage();

    await page.goto('https://demoblaze.com/')
    //Login
    await page.click("//a[@id='login2']");
    await page.locator("//input[@id='loginusername']").fill('sathish_sekar');
    await page.locator("//input[@id='loginpassword']").fill('Sathish143');
    await page.click("button[onclick='logIn()']");

});

test.afterAll(async ()=>{
await page.locator('#logout2').click();
});

test('Home Page Test', async () => {
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);

    for (let product of products) {
        console.log(await product.textContent())

    }

});

test('Add Product to cart Test', async () => {
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.waitForTimeout(2000);

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })

    await page.click("//a[normalize-space()='Add to cart']")
    await page.waitForTimeout(2000);
    
});