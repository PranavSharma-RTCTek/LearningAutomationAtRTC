import { test, expect } from '@playwright/test';
import {
  epic,
  feature,
  story,
  severity,
  owner,
  tag
} from 'allure-js-commons';

test('fillForm', async ({ page }, testInfo) => {
  await epic('Authentication');
  await feature('Form Filling');
  await story('Valid User Login');
  await severity('critical');
  await owner('Pranav');
  await tag('smoke');

  await page.goto('https://demoqa.com/');

  await page.locator("//*[@href='/forms']").click();

  await expect(
    page.locator("//*[@class='element-list accordion-collapse collapse show']")
  ).toBeVisible();

  await page
    .locator("//*[@class='element-list accordion-collapse collapse show']")
    .click();

  // Wait for the form to be fully loaded
  await page.waitForLoadState('networkidle');
  await expect(page.locator("//*[@id='firstName']")).toBeVisible();

  await testInfo.attach('Before Filling Form', {
    body: await page.screenshot({ fullPage: true }),
    contentType: 'image/png',
  });

  await expect(page.locator("//*[@id='firstName']")).toBeVisible();
  await page.locator("//*[@id='firstName']").fill('Trevor');

  await expect(page.locator("//*[@id='lastName']")).toBeVisible();
  await page.locator("//*[@id='lastName']").fill('Hunter');

  await expect(page.locator("//*[@id='userEmail']")).toBeVisible();
  await page.locator("//*[@id='userEmail']").fill('prosperitree@gmail.com');

  await page.locator("label[for='gender-radio-1']").click();

  await expect(page.locator("//*[@id='userNumber']")).toBeVisible();
  await page.locator("//*[@id='userNumber']").fill('1234567890');

  await expect(page.locator("//*[@id='dateOfBirthInput']")).toBeVisible();
  await page.locator("//*[@id='dateOfBirthInput']").fill('07 Jul 2002');

  await expect(page.locator("//*[@id='subjectsInput']")).toBeVisible();
  await page.locator("//*[@id='subjectsInput']").fill('Maths');
  await page.locator("//*[text()='Maths']").click();

  await page.locator("label[for='hobbies-checkbox-1']").click();
  await page.locator("label[for='hobbies-checkbox-2']").click();

  await page
    .locator("//*[@id='uploadPicture']")
    .setInputFiles('C:\\Users\\pranav.sharma\\Downloads\\Tree.PNG');

  await page.locator("//*[@id='currentAddress']").fill(
    '707 S. Lindon Ln., Tempe, AZ'
  );

  await page.evaluate(() => window.scrollBy(0, 500));

  await page.locator("//*[@id='state']").click();
  await page.locator("//*[text()='NCR']").click();

  await page.locator("//*[@id='city']").click();
  await page.locator("//*[text()='Noida']").click();

  // Ensure form state is settled before screenshot
  await page.waitForLoadState('networkidle');
  await page.locator("//*[@id='submit']").isVisible();

  await testInfo.attach('After Filling Form', {
    body: await page.screenshot({ fullPage: true }),
    contentType: 'image/png',
  });

  // Submit Form
  await page.locator("//*[@id='submit']").click();

  await expect(
    page.locator("//*[@id='example-modal-sizes-title-lg']")
  ).toBeVisible();

  await expect(
    page.locator("((//tbody/tr)[1]/td)[2]")
  ).toHaveText('Trevor Hunter');

  await expect(
    page.locator("((//tbody/tr)[2]/td)[2]")
  ).toHaveText('prosperitree@gmail.com');

  await expect(
    page.locator("((//tbody/tr)[4]/td)[2]")
  ).toHaveText('1234567890');

  await expect(
    page.locator("((//tbody/tr)[6]/td)[2]")
  ).toContainText('Maths');

  await expect(
    page.locator("((//tbody/tr)[9]/td)[2]")
  ).toHaveText('707 S. Lindon Ln., Tempe, AZ');
});