//const { test, expect } = require('@playwright/test')
import { test, expect } from '@playwright/test'

test('page screenshot', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})
});

test.only('Full page screenshot', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png', fullPage:true})
});

test.only('Element screenshot', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//td[@class='first columns-cell']").screenshot({path:'tests/screenshots/'+Date.now()+'ElementPage.png'})
});