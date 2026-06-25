import {test, expect} from "@playwright/test";

test("verify page title", async({page}) => {
    await page.goto("https://www.flipkart.com/");
    await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
})