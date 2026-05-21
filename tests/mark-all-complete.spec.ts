import { test, expect } from '@playwright/test';

async function addTodo(page, text: string) {
  await page.getByPlaceholder('What needs to be done?').fill(text);
  await page.keyboard.press('Enter');
}

test('marks all todos as complete', async ({ page }) => {
  await page.goto('/');

  await addTodo(page, 'Task 1');
  await addTodo(page, 'Task 2');
  await addTodo(page, 'Task 3');

  // TODO: Candidate should implement this test
  // Find the "mark all as complete" control and click it,
  // then assert all 3 todos are completed.
});
