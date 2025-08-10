const { test, expect } = require('@playwright/test')

test.skip('Frame handle', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const allFrames = await page.frames();
    console.log('Total frames:', allFrames.length);

    //frame by name
    //const frameByName = await page.frame({ name: 'frame1' });
    //const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    //await frame1.fill("input[name='mytext1']", 'Sathish');

    //approach 2: using frame locator
    const frameLocator = page.frameLocator("frame[src='frame_1.html']").locator('input[name="mytext1"]');
    await frameLocator.fill('Sathish');

    await page.waitForTimeout(5000); // wait for 5 seconds to see the filled input

});

test('Inner Frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    frame3.locator('input[name="mytext3"]').fill('Sathish');
    
    //nested frame
    const childFrames=await frame3.childFrames();
    await childFrames[0].locator('//*[@id="i6"]/div[3]/div').check();

     await page.waitForTimeout(5000);

});