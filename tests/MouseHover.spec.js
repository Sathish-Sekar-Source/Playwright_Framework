const { test, expect } = require('@playwright/test')

test.skip('Mouse hover', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');

    const desktops=await page.locator("//a[normalize-space()='Desktops']");
    const macbook=await page.locator("//a[normalize-space()='Mac (1)']");

    //mouse hover
    await desktops.hover()
    await macbook.hover()

});

test.skip('Mouse Right Click', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const button=await page.locator('//span[normalize-space()="right click me"]');

    //right click action
    await button.click({button: 'right'});

    await page.waitForTimeout(5000);
});

test.skip('Mouse Double Click', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const btnCopy=await page.locator("//button[normalize-space()='Copy Text']")

    //double click
    await btnCopy.dblclick()

    const f2=await page.locator('#field2')
    await expect(f2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000);

});

test.skip('Drag And Drop', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag');

    const rome=await page.locator('#box6')
    const italy=await page.locator('#box106')

    //Approach 1
    await rome.hover()
    await page.mouse.down()

    await italy.hover()
    await page.mouse.up()

    //Approach 2
    await rome.dragTo(italy)

    //WASHINGTON ---> US
    const washington=await page.locator('#box3')
    const usa=await page.locator('#box103')

    await washington.dragTo(usa)
    

});
