const { test, expect } = require('@playwright/test')

test.skip('Alert with OK', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.click("//button[@id='alertBtn' and normalize-space()='Simple Alert']");

});

test.skip('Confirmation Dialog-Alert with Ok and Cancel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
        //await dialog.dismiss();
    })

    await page.click("//button[@id='confirmBtn' and normalize-space()='Confirmation Alert']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');

});

test('Prompt Dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Sathish Sekar');
    })

    await page.click("//button[@id='promptBtn' and normalize-space()='Prompt Alert']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Sathish Sekar! How are you today?');

    await page.close();

});