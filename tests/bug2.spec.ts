import { test, expect } from '@playwright/test';

async function addTodo(page, text: string) {
  await page.getByPlaceholder('What needs to be done?').fill(text);
  await page.keyboard.press('Enter');
}

test('shows one completed todo after completing a task', async ({ page }) => {
  await page.goto('/todomvc');
  await page.waitForTimeout(1000);

  await addTodo(page, 'Write tests');

  page.getByRole('checkbox', { name: 'Toggle Todo' }).check();

  const completedCount = await page.locator('.completed').count();
  expect(completedCount).toBe(1);
});
