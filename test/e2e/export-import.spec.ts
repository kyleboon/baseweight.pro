import { test, expect } from '@playwright/test';

import { testRoot } from './utils';

import { registerUser } from './auth-utils';

async function freshUser(page: any) {
    const now = Date.now();
    await registerUser(page, `exp${now}`, 'testtest', `exp+${now}@lighterpack.com`);
}

/**
 * Seeds a small list, publishes it to get an externalId, and returns the CSV
 * download URL so the caller can fetch the file content.
 */
async function seedAndGetCsvUrl(page: any): Promise<string> {
    // Add two categories with one item each
    await page.locator('input.lpCategoryName').first().fill('Shelter');
    await page.locator('.lpCategory').first().locator('input.lpName').first().fill('Tent');
    await page.locator('.lpCategory').first().locator('input.lpWeight').first().fill('800');

    await page.getByText('Add new category').click();
    await page.locator('input.lpCategoryName').nth(1).fill('Kitchen');
    await page.locator('.lpCategory').nth(1).locator('input.lpName').first().fill('Stove');
    await page.locator('.lpCategory').nth(1).locator('input.lpWeight').first().fill('100');

    // Open the Share popover to generate an externalId
    await page.locator('#share').hover();
    const shareUrlInput = page.getByLabel('Share your list');
    await expect(shareUrlInput).toHaveValue(/\S/, { timeout: 10000 });
    const shareUrl = await shareUrlInput.inputValue();

    // Derive the CSV URL from the share URL: /r/:id → /csv/:id
    const externalId = shareUrl.split('/r/')[1];
    return `${testRoot}csv/${externalId}`;
}

test.describe('Export and re-import a list', () => {
    test('should export a CSV that contains the seeded items', async ({ page }) => {
        await freshUser(page);
        const csvUrl = await seedAndGetCsvUrl(page);

        const response = await page.request.get(csvUrl);
        expect(response.status()).toBe(200);

        const body = await response.text();
        expect(body).toContain('Tent');
        expect(body).toContain('Stove');
        expect(body).toContain('Shelter');
        expect(body).toContain('Kitchen');
    });

    test('should round-trip: exported CSV imports back with all items', async ({ page }) => {
        await freshUser(page);
        const csvUrl = await seedAndGetCsvUrl(page);

        // Download the CSV
        const response = await page.request.get(csvUrl);
        expect(response.status()).toBe(200);
        const csvContent = await response.text();

        // Close the Share popover by clicking elsewhere
        await page.locator('.lpListBody').click();

        // Create a new blank list to import into
        await page.getByText('Add new list').click();
        await page.locator('.lpLibraryList').nth(1).locator('.lpLibraryListSwitch').click();

        // Open the Import CSV flow
        await page.locator('#addListFlyout').hover();
        await page.getByText('Import CSV').click();

        await page.setInputFiles('#csv', {
            name: 'export.csv',
            mimeType: 'text/csv',
            buffer: Buffer.from(csvContent),
        });

        // Validation modal should show both items
        await expect(page.locator('#importValidate')).toBeVisible();
        await expect(page.locator('#importData')).toContainText('Tent');
        await expect(page.locator('#importData')).toContainText('Stove');

        // Confirm the import
        await page.locator('#importConfirm').click();
        await expect(page.locator('#importValidate')).toBeHidden();

        // Both items should now appear in the new list
        await expect(page.locator('.lpItem')).toHaveCount(2);
        await expect(page.locator('.lpCategory')).toHaveCount(2);
    });

    test('should preserve item weights after round-trip', async ({ page }) => {
        await freshUser(page);
        const csvUrl = await seedAndGetCsvUrl(page);

        const response = await page.request.get(csvUrl);
        const csvContent = await response.text();

        await page.locator('.lpListBody').click();
        await page.getByText('Add new list').click();
        await page.locator('.lpLibraryList').nth(1).locator('.lpLibraryListSwitch').click();

        await page.locator('#addListFlyout').hover();
        await page.getByText('Import CSV').click();

        await page.setInputFiles('#csv', {
            name: 'export.csv',
            mimeType: 'text/csv',
            buffer: Buffer.from(csvContent),
        });

        await expect(page.locator('#importValidate')).toBeVisible();
        await page.locator('#importConfirm').click();

        // The Shelter category subtotal should reflect Tent at 800 oz
        const shelterCategory = page.locator('.lpCategory').filter({ hasText: 'Shelter' });
        await expect(shelterCategory.locator('.lpDisplaySubtotal')).toContainText('800');
    });
});
