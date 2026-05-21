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
