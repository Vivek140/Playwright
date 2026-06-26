import {test, expect} from '@playwright/test';

test("verify the alttext",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    await expect(page.getByAltText("company-branding")).toBeVisible();
})

test("verify the xpath",async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await expect(page.locator("//img[@alt='company-branding']")).toBeVisible();

})
 
test("verify the css locator",async({page})=>{
            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            await expect(page.locator("h5")).toBeVisible();
            await page.getByPlaceholder('Username').fill('Admin');
            await page.getByPlaceholder('Password').fill('admin123');
            await page.locator("button[type='submit']").click();
            await page.getByText("PIM").click();
            await expect(page.getByText("Employee Information")).toBeVisible();
            await page.getByText("--Select--").isVisible();
            //await page.getByText("--Select--").click();
            await page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click();
            await page.getByText("Full-Time Permanent").click();

})

test("verfy the calender",async({page})=>{

    await page.goto("https://www.booking.com/");
    await page.screenshot({path:'screenshot/homepage.png'})
 
})
