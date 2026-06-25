import { test, expect } from '@playwright/test';

test("verify window url", async ({ context }) => {
  const page1 = context.newPage();
   (await page1).goto("https://www.amazon.in/s?k=macbook+air+m4&crid=2QO7KUZEJDHHA&sprefix=%2Caps%2C230&ref=nb_sb_ss_recent_1_0_recent");
  // Wait for new page AND click the link simultaneously
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    (await page1).locator("a[class*='s-link-style'] h2 span:has-text('MacBook Air')").first().click()
  ]);

  const page=context.pages();
  console.log("pages:",page.length);
});