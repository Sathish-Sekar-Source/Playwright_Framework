//const { test, expect } = require('@playwright/test')
import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('test', async ({ page }) => {

    //Login
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('sathish_sekar','Sathish143');
    await page.waitForTimeout(3000)

    //Add to cart
    const homePage=new HomePage(page);
    await homePage.addProductToCart('Nexus 6');
    await page.waitForTimeout(3000);
    await homePage.gotoCart();

    //Cart
    const cartPage=new CartPage(page);
    await page.waitForTimeout(3000);
    const status= await cartPage.checkProductInCart('Nexus 6');
    expect(await status).toBe(true);

});