import {test, expect} from '@playwright/test';


test("verfy the calender",async({page})=>{

    await page.goto("https://www.booking.com/");
    await page.screenshot({path:'screenshot/homepage.png'})
 
})
