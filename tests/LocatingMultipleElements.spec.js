const { test, expect } = require('@playwright/test')
//import {test, expect} from '@playwright/test';

test('LocateMultipleElements', async ({ page }) => {
    await page.goto('https://demoblaze.com/');

    /*const links = await page.$$('a');

    for( const link of links) {
        const text = await link.textContent();
        console.log(text);
        expect(text).not.toBeNull();
    }*/

    page.waitForSelector("//div[@id='tbodyid']//h4/a");
    await page.waitForTimeout(2000); // Wait for the elements to load
    const products = await page.$$("//div[@id='tbodyid']//h4/a");
    
    for (const product of products) {
        const text = await product.textContent();
        console.log(text);
        expect(text).not.toBeNull();
    }

    /*const links = await page.$$eval("//div[@id='tbodyid']//h4/a", anchors => anchors.map(anchor => anchor.textContent));
    for (const text of links) {
        console.log(text);
        expect(text).not.toBeNull();
    }*/

})