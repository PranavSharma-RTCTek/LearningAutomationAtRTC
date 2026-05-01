import { test, expect } from '@playwright/test';
//import * as allure from 'allure-js-commons';

import { allure } from 'allure-playwright';

import {
  epic,
  feature,
  story,
  severity,
  owner,
  tag
} from 'allure-js-commons';

test('fillForm', async ({ page }) => {
  allure.epic('Authentication');
  allure.feature('Form FIlling');
  allure.story('Valid User Login');
  allure.severity('critical');
  allure.owner('Pranav');
  allure.tag('smoke');

  await page.goto('https://demoqa.com/');

  const screenshot = await page.screenshot();
  await allure.attachment("Checkpoint Screenshot", screenshot, "image/png");

  // Expect a title "to contain" a substring.
  page.locator("//*[@ href='/forms']").click();
  await expect(page.locator("//*[@ class='element-list accordion-collapse collapse show']")).toBeVisible();
  page.locator("//*[@ class='element-list accordion-collapse collapse show']").click();

  await expect(page.locator("//*[@ id='firstName']")).toBeVisible();
  await page.locator("//*[@id='firstName']").fill("Trevor");

  await expect(page.locator("//*[@id='lastName']")).toBeVisible();
  await page.locator("//*[@id='lastName']").fill("Hunter");

  await expect(page.locator("//*[@id='userEmail']")).toBeVisible();
  await page.locator("//*[@id='userEmail']").fill("prosperitree@gmail.com");

  await expect(page.locator("//*[@id='gender-radio-1']")).toBeVisible();
  await page.locator("//*[@id='gender-radio-1']").click();

  await expect(page.locator("//*[@id='userNumber']")).toBeVisible();
  await page.locator("//*[@id='userNumber']").fill("1234567890");

  await expect(page.locator("//*[@id='dateOfBirthInput']")).toBeVisible();
  await page.locator("//*[@id='dateOfBirthInput']").fill("07 Jul 2002");

  await expect(page.locator("//*[@id='subjectsInput']")).toBeVisible();
  await page.locator("//*[@id='subjectsInput']").fill("Maths");

  await expect(page.locator("//*[text()='Maths']")).toBeVisible();
  await page.locator("//*[text()='Maths']").click();

  await expect(page.locator("//*[@id='hobbies-checkbox-1']")).toBeVisible();
  await page.locator("//*[@id='hobbies-checkbox-1']").click();

  await expect(page.locator("//*[@id='hobbies-checkbox-2']")).toBeVisible();
  await page.locator("//*[@id='hobbies-checkbox-2']").click();

  await expect(page.locator("//*[@id='uploadPicture']")).toBeVisible();
  await page.locator("//*[@id='uploadPicture']").setInputFiles("C:\\Users\\pranav.sharma\\Downloads\\Tree.PNG");

  await expect(page.locator("//*[@id = 'currentAddress']")).toBeVisible();
  await page.locator("//*[@id = 'currentAddress']").fill("707 S. Lindon Ln., Tempe, AZ");

  await expect(page.locator("//*[@id='state']")).toBeVisible();
  await page.locator("//*[@id='state']").click();

  await expect(page.locator("//*[text() = 'NCR']")).toBeVisible();
  await page.locator("//*[text() = 'NCR']").click();

  await expect(page.locator("//*[@id = 'city']")).toBeVisible();
  await page.locator("//*[@id = 'city']").click();

  await expect(page.locator("//*[text() = 'Noida']")).toBeVisible();
  await page.locator("//*[text() = 'Noida']").click();

  await expect(page.locator("//*[@id = 'submit']")).toBeVisible();
  await page.locator("//*[@id = 'submit']").click();

  const screenshot1 = await page.screenshot();
  await allure.attachment("Checkpoint Screenshot", screenshot1, "image/png");

  await page.waitForTimeout(5_000);

});

/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}); */

