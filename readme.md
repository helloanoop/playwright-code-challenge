# Playwright Code Challenge

QA Automation interview challenge (~15 minutes) using [TodoMVC](https://demo.playwright.dev/todomvc).

## Setup

```bash
npm install
npx playwright install chromium
```

## Running Tests

Run all interview tests (Chromium):

```bash
npx playwright test --project=chromium
```

Run in debug mode (step through with Playwright Inspector):

```bash
npx playwright test --project=chromium --debug
```

## View Test Report

```bash
npx playwright show-report
```

## Challenges

Open `tests/todos.spec.ts` and fix/implement the following:

### Bug #1: Bad Locator Strategy

**Intent:** Add two todos, delete only "Buy milk", verify "Walk dog" remains.

**Task:** Figure out why this test fails and fix it.

---

### Bug #2: Flaky Assertion / Timing

**Intent:** Add a todo, mark it complete, verify exactly 1 completed todo exists.

**Task:** Figure out why this test is flaky and fix it.

---

### Feature: Mark All Todos Complete

The TodoMVC app has a "toggle all" checkbox (the downward chevron arrow next to the input field) that marks every todo as completed.

**Task:** Write a test that adds 3 todos, clicks the toggle-all control, and asserts all 3 are marked as completed.

**Requirements:**
- Should mark every todo as completed
- Should not create duplicate todos or remove existing todos
- Use Playwright auto-waiting assertions (no sleeps)
