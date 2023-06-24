import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/FENG-LIN CHANG 張峰林/);
});

test('has title and headline', async ({ page }) => {
  await page.getByTitle('select language').hover();

  await expect(
    page
      .getByRole('listitem')
      .locator('visible=true')
      .getByText('English', { exact: true })
  ).toBeDisabled();
  await expect(
    page.getByRole('heading', { name: 'Feng-Lin Chang' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Front-End Engineer', exact: true })
  ).toBeVisible();
});

test('has title and headline in ZHT', async ({ page }) => {
  await page.getByTitle('select language').hover();
  await page
    .getByRole('listitem')
    .locator('visible=true')
    .getByText('繁體中文', { exact: true })
    .click();

  await expect(page.getByRole('heading', { name: '張峰林' })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: '前端工程師', exact: true })
  ).toBeVisible();
});

test('LinkedIn link', async ({ page }) => {
  await page
    .getByRole('link', { name: 'linkedin.com/in/fenglinchang' })
    .click();

  await expect(page).toHaveURL(/linkedin.com\/in\/fenglinchang/);
});

test('GitHub link', async ({ page }) => {
  await page
    .getByRole('link', { name: 'github.com/fenglinchang996', exact: true })
    .click();

  await expect(page).toHaveURL(/.*github.com\/fenglinchang996\/?$/);
});
