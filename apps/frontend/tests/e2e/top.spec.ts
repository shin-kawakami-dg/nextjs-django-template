import { expect, test } from "@playwright/test";

test("トップページにアクセスできる", async ({ page }) => {
  // トップページへアクセス
  const response = await page.goto("/");
  // HTTPステータスが200であることを確認
  expect(response?.status()).toBe(200);
  // ページの本文が表示されていることを確認
  await expect(page.locator("body")).toBeVisible();
});
