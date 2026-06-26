import { test, expect } from '@playwright/test';

test("verify window url", async ({ page, context }) => {
  await page.setContent(`
    <a href="about:blank#macbook-air-m4" target="_blank">MacBook Air</a>
  `);

  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'MacBook Air' }).click()
  ]);

  await expect(newPage).toHaveURL('about:blank#macbook-air-m4');
  expect(context.pages()).toHaveLength(2);
});
