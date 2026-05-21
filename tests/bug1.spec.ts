/**
 * BUG #1 — Bad Locator Strategy
 *
 * Intent: Add two todos, delete only "Buy milk", verify "Walk dog" remains.
 *
 * What's wrong:
 *   - `.destroy` buttons are hidden until you hover over a todo item
 *   - `page.locator('.destroy')` matches ALL destroy buttons (ambiguous)
 *   - No hover is performed, so the button is not interactable
 *
 * TODO: Candidate should fix this test so it reliably deletes only "Buy milk".
 */

import { test, expect } from '@playwright/test';

async function addTodo(page, text: string) {
  await page.getByPlaceholder('What needs to be done?').fill(text);
  await page.keyboard.press('Enter');
}

test('deletes a single todo', async ({ page }) => {
  await page.goto('/todomvc');
  await page.waitForTimeout(1000);

  await addTodo(page, 'Buy milk');
  await page.waitForTimeout(1000);

  await addTodo(page, 'Walk dog');
  await page.waitForTimeout(1000);

  await page.locator('.destroy').click();
  await page.waitForTimeout(1000);

  await expect(page.getByText('Buy milk')).not.toBeVisible();
  await page.waitForTimeout(1000);

  await expect(page.getByText('Walk dog')).toBeVisible();
});
