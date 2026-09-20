import {test} from '@playwright/test';

test('test one',async function testone({browser}){
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://automationpracticehub.com/");
    await page.waitForTimeout(5000);
});