import { test, expect } from '@playwright/test';

import { testRoot } from './utils';

import { registerUser } from './auth-utils';

test.describe('List tests', () => {
    test('should successfully get an external ID', async ({ page }) => {
        const now = Date.now();
        const username = `id${now}`;
        const email = `id+${now}@lighterpack.com`;
        const password = 'testtest';

        await registerUser(page, username, password, email);
        await page.getByText('Share', { exact: true }).hover();

        const shareUrlLocator = page.getByLabel('Share your list');
        await expect(shareUrlLocator).toHaveValue(/\S/);
        const shareUrl = await shareUrlLocator.inputValue();

        await expect(async () => {
            const response = await page.request.get(shareUrl);
            expect(response.status()).toBe(200);
        }).toPass();
        await page.goto(shareUrl);
    });

    test('should save list name', async ({ page }) => {
        const now = Date.now();
        const username = `name${now}`;
        const email = `name+${now}@lighterpack.com`;
        const password = 'testtest';
        const listName = 'Test List Name';

        await registerUser(page, username, password, email);
        await page.getByText('Share', { exact: true }).hover();

        const shareUrlLocator = page.getByLabel('Share your list');
        await expect(shareUrlLocator).toHaveValue(/\S/);
        const shareUrl = await shareUrlLocator.inputValue();

        await page.getByPlaceholder('List Name').fill(listName);
        // Blur to trigger the auto-save debounce
        await page.getByPlaceholder('List Name').blur();

        // Poll the share page until the list name appears (auto-save has a 10s debounce)
        await expect(async () => {
            const response = await page.request.get(shareUrl);
            expect(response.status()).toBe(200);
            expect(await response.text()).toContain(listName);
        }).toPass({ timeout: 30000 });

        await page.goto(shareUrl);
        await expect(page.getByRole('heading').filter({ hasText: listName })).toBeVisible();
    });
});
