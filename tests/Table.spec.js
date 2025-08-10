const { test, expect } = require('@playwright/test')

test('Table handle', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    // Total number of columns
    const totalColumns = await table.locator('thead tr th')
    console.log('Total number of columns:', await totalColumns.count());
    expect(await totalColumns.count()).toBe(4);

    // Total number of rows
    const totalRows = await table.locator('tbody tr')
    console.log('Total number of rows:', await totalRows.count());
    expect(await totalRows.count()).toBe(5);

    /*const matchedRow= totalRows.filter({
        has: page.locator('td', { hasText: 'Laptop' })
    });
    await matchedRow.locator('input').check();
    */

    await selectProduct(totalRows, page, 'Laptop');
    await selectProduct(totalRows, page, 'Smartphone');
    await selectProduct(totalRows, page, 'Wireless Earbuds');

    // print all product details using loop
    /*for(let i=0;i<await totalRows.count();i++)
    {
        const row=totalRows.nth(i);
        const tds=row.locator('td')

        for(let j=0;j<await tds.count()-1;j++)
        {
            console.log(await tds.nth(j).textContent())
        }

    }*/

//Read data from all the pages in the table
const pages=await page.locator('.pagination li a')
console.log('Number of pages in the table: ',await pages.count())

for(let p=0; p<await pages.count(); p++)
{
    if(p>0)
    {
        await pages.nth(p).click();
    }
    for(let i=0;i<await totalRows.count();i++)
    {
        const row=totalRows.nth(i);
        const tds=row.locator('td')

        for(let j=0;j<await tds.count()-1;j++)
        {
            console.log(await tds.nth(j).textContent())
        }

    }
    await page.waitForTimeout(2000);
}


});

async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td', { hasText: name })
    })
    await matchedRow.locator('input').check();
}