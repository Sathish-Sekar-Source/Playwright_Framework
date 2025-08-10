import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html#');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('sathish_sekar');
  await page.locator('#loginpassword').fill('Sathish143');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});