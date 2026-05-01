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
  // Allure metadata
  await epic('Authentication');
  await feature('Form Filling');
  await story('Valid User Login');
  await severity('critical');
  await owner('Pranav');
  await tag('smoke');

  // Navigate to DemoQA
  await page.goto('https://demoqa.com/');

  // Navigate to Forms section
  await page.locator("//*[@href='/forms']").click();

  await expect(
    page.locator("//*[@class='element-list accordion-collapse collapse show']")
  ).toBeVisible();

  await page
    .locator("//*[@class='element-list accordion-collapse collapse show']")
    .click();

  // Screenshot BEFORE filling form
  await testInfo.attach('Before Filling Form', {
    body: await page.screenshot({ fullPage: true }),
    contentType: 'image/png',
  });

  // Fill First Name
  await expect(page.locator("//*[@id='firstName']")).toBeVisible();
  await page.locator("//*[@id='firstName']").fill('Trevor');

  // Fill Last Name
  await expect(page.locator("//*[@id='lastName']")).toBeVisible();
  await page.locator("//*[@id='lastName']").fill('Hunter');

  // Fill Email
  await expect(page.locator("//*[@id='userEmail']")).toBeVisible();
  await page.locator("//*[@id='userEmail']").fill('prosperitree@gmail.com');

  // Select Gender
  await page.locator("label[for='gender-radio-1']").click();

  // Fill Mobile Number
  await expect(page.locator("//*[@id='userNumber']")).toBeVisible();
  await page.locator("//*[@id='userNumber']").fill('1234567890');

  // Fill DOB
  await expect(page.locator("//*[@id='dateOfBirthInput']")).toBeVisible();
  await page.locator("//*[@id='dateOfBirthInput']").fill('07 Jul 2002');

  // Fill Subjects
  await expect(page.locator("//*[@id='subjectsInput']")).toBeVisible();
  await page.locator("//*[@id='subjectsInput']").fill('Maths');
  await page.locator("//*[text()='Maths']").click();

  // Select Hobbies
  await page.locator("label[for='hobbies-checkbox-1']").click();
  await page.locator("label[for='hobbies-checkbox-2']").click();

  // Upload Picture
  await page
    .locator("//*[@id='uploadPicture']")
    .setInputFiles('C:\\Users\\pranav.sharma\\Downloads\\Tree.PNG');

  // Fill Address
  await page.locator("//*[@id='currentAddress']").fill(
    '707 S. Lindon Ln., Tempe, AZ'
  );

  // Scroll down
  await page.evaluate(() => window.scrollBy(0, 500));

  // Select State
  await page.locator("//*[@id='state']").click();
  await page.locator("//*[text()='NCR']").click();

  // Select City
  await page.locator("//*[@id='city']").click();
  await page.locator("//*[text()='Noida']").click();

  // Screenshot AFTER filling form BEFORE submission
  await testInfo.attach('After Filling Form', {
    body: await page.screenshot({ fullPage: true }),
    contentType: 'image/png',
  });

  // Submit Form
  await page.locator("//*[@id='submit']").click();

  // Validate successful submission
  await expect(
    page.locator("//*[@id='example-modal-sizes-title-lg']")
  ).toBeVisible();

  // Assertions
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