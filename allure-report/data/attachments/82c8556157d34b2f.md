# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoQA.spec.ts >> fillForm
- Location: tests\DemoQA.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import * as allure from 'allure-js-commons';
  3  | 
  4  | test('fillForm', async ({ page }) => {
  5  |   allure.epic('Authentication');
  6  |   allure.feature('Form FIlling');
  7  |   allure.story('Valid User Login');
  8  |   allure.severity('critical');
  9  |   allure.owner('Pranav');
  10 |   allure.tag('smoke');
  11 | 
> 12 |   await page.goto('https://demoqa.com/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  13 | 
  14 |   // Expect a title "to contain" a substring.
  15 |   page.locator("//*[@ href='/forms']").click();
  16 |   await expect(page.locator("//*[@ class='element-list accordion-collapse collapse show']")).toBeVisible();
  17 |   page.locator("//*[@ class='element-list accordion-collapse collapse show']").click();
  18 | 
  19 |   await expect(page.locator("//*[@ id='firstName']")).toBeVisible();
  20 |   await page.locator("//*[@id='firstName']").fill("Trevor");
  21 | 
  22 |   await expect(page.locator("//*[@id='lastName']")).toBeVisible();
  23 |   await page.locator("//*[@id='lastName']").fill("Hunter");
  24 | 
  25 |   await expect(page.locator("//*[@id='userEmail']")).toBeVisible();
  26 |   await page.locator("//*[@id='userEmail']").fill("prosperitree@gmail.com");
  27 | 
  28 |   await expect(page.locator("//*[@id='gender-radio-1']")).toBeVisible();
  29 |   await page.locator("//*[@id='gender-radio-1']").click();
  30 | 
  31 |   await expect(page.locator("//*[@id='userNumber']")).toBeVisible();
  32 |   await page.locator("//*[@id='userNumber']").fill("1234567890");
  33 | 
  34 |   await expect(page.locator("//*[@id='dateOfBirthInput']")).toBeVisible();
  35 |   await page.locator("//*[@id='dateOfBirthInput']").fill("07 Jul 2002");
  36 | 
  37 |   await expect(page.locator("//*[@id='subjectsInput']")).toBeVisible();
  38 |   await page.locator("//*[@id='subjectsInput']").fill("Maths");
  39 | 
  40 |   await expect(page.locator("//*[text()='Maths']")).toBeVisible();
  41 |   await page.locator("//*[text()='Maths']").click();
  42 | 
  43 |   await expect(page.locator("//*[@id='hobbies-checkbox-1']")).toBeVisible();
  44 |   await page.locator("//*[@id='hobbies-checkbox-1']").click();
  45 | 
  46 |   await expect(page.locator("//*[@id='hobbies-checkbox-2']")).toBeVisible();
  47 |   await page.locator("//*[@id='hobbies-checkbox-2']").click();
  48 | 
  49 |   await expect(page.locator("//*[@id='uploadPicture']")).toBeVisible();
  50 |   await page.locator("//*[@id='uploadPicture']").setInputFiles("C:\\Users\\pranav.sharma\\Downloads\\Tree.PNG");
  51 | 
  52 |   await expect(page.locator("//*[@id = 'currentAddress']")).toBeVisible();
  53 |   await page.locator("//*[@id = 'currentAddress']").fill("707 S. Lindon Ln., Tempe, AZ");
  54 | 
  55 |   await expect(page.locator("//*[@id='state']")).toBeVisible();
  56 |   await page.locator("//*[@id='state']").click();
  57 | 
  58 |   await expect(page.locator("//*[text() = 'NCR']")).toBeVisible();
  59 |   await page.locator("//*[text() = 'NCR']").click();
  60 | 
  61 |   await expect(page.locator("//*[@id = 'city']")).toBeVisible();
  62 |   await page.locator("//*[@id = 'city']").click();
  63 | 
  64 |   await expect(page.locator("//*[text() = 'Noida']")).toBeVisible();
  65 |   await page.locator("//*[text() = 'Noida']").click();
  66 | 
  67 |   await expect(page.locator("//*[@id = 'submit']")).toBeVisible();
  68 |   await page.locator("//*[@id = 'submit']").click();
  69 |   await page.waitForTimeout(5_000);
  70 | 
  71 | });
  72 | 
  73 | /*
  74 | test('get started link', async ({ page }) => {
  75 |   await page.goto('https://playwright.dev/');
  76 | 
  77 |   // Click the get started link.
  78 |   await page.getByRole('link', { name: 'Get started' }).click();
  79 | 
  80 |   // Expects page to have a heading with the name of Installation.
  81 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  82 | }); */
  83 | 
  84 | 
```