import { test, expect } from '@playwright/test';

import { testRoot } from './utils';

import { registerUser } from './auth-utils';

const forgotPasswordUrl = `${testRoot}forgot-password`;

test.describe('Forgot password / username', () => {
    test('should show the forgot-password page', async ({ page }) => {
        await page.goto(forgotPasswordUrl);

        await expect(page.getByRole('heading', { name: 'Forgot Your Password?' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Forgot Your Username?' })).toBeVisible();
    });

    test('should navigate to the forgot-password page from the sign-in link', async ({ page }) => {
        await page.goto(testRoot);

        await page.getByText('Forgot username/password?').click();

        await expect(page).toHaveURL(/forgot-password/);
        await expect(page.getByRole('heading', { name: 'Forgot Your Password?' })).toBeVisible();
    });

    test('should show a confirmation page after submitting a known username', async ({ page }) => {
        const now = Date.now();
        const username = `fpw${now}`;
        const email = `fpw+${now}@lighterpack.com`;

        await registerUser(page, username, 'testtest', email);

        // Sign out so we can visit the forgot-password page as a guest
        await page.getByText('Signed in as').hover();
        await page.getByText('Sign out').click();

        await page.goto(forgotPasswordUrl);
        await page.locator('.forgotPassword input[name="username"]').fill(username);
        await page.locator('.forgotPassword input[type="submit"]').click();

        await expect(page).toHaveURL(/reset-password/);
    });

    test('should show an error for an unknown username', async ({ page }) => {
        await page.goto(forgotPasswordUrl);

        await page.locator('.forgotPassword input[name="username"]').fill('definitelynosuchuser12345');
        await page.locator('.forgotPassword input[type="submit"]').click();

        await expect(page.locator('.forgotPassword .lpError')).toBeVisible();
    });

    test('should show a confirmation page after submitting a known email for username recovery', async ({ page }) => {
        const now = Date.now();
        const username = `fpu${now}`;
        const email = `fpu+${now}@lighterpack.com`;

        await registerUser(page, username, 'testtest', email);

        await page.getByText('Signed in as').hover();
        await page.getByText('Sign out').click();

        await page.goto(forgotPasswordUrl);
        await page.locator('.forgotUsername input[name="email"]').fill(email);
        await page.locator('.forgotUsername input[type="submit"]').click();

        await expect(page).toHaveURL(/forgot-username/);
    });

    test('should show an error for an unknown email in username recovery', async ({ page }) => {
        await page.goto(forgotPasswordUrl);

        await page.locator('.forgotUsername input[name="email"]').fill('nobody@example.invalid');
        await page.locator('.forgotUsername input[type="submit"]').click();

        await expect(page.locator('.forgotUsername .lpError')).toBeVisible();
    });
});
