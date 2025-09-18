import { test, expect } from '@playwright/test';

test('home loads and shows hero', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Mój Blog')).toBeVisible();
});


