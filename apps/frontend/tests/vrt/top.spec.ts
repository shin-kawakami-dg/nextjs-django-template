import { expect, test } from "@playwright/test";

test("トップページの表示が変化していない", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot();
});
