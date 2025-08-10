//const { test, expect } = require('@playwright/test')
import {test, expect} from '@playwright/test';

test.use({
  viewport: { width: 1600, height: 1200 },
});

test('Device Emulation', async ({ page }) => {

    await page.goto('https://playwright.dev/')
    await page.waitForTimeout(5000);

});