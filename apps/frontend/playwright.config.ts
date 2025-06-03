import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? [["html", { open: "never" }], ["github"], ["json", { outputFile: "playwright-report/results.json" }], ["list", { printSteps: true }]]
    : [["html", { open: "never" }]],
  use: {
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run build && npm run start",
    port: 3000,
  },
  projects: [
    {
      name: "e2e-chromium",
      testDir: "./tests/e2e",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "e2e-mobile-webkit",
      testDir: "./tests/e2e",
      use: { ...devices["iPhone 15"] },
    },
    {
      name: "vrt-chromium",
      testDir: "./tests/vrt",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "vrt-mobile-webkit",
      testDir: "./tests/vrt",
      use: { ...devices["iPhone 15"] },
    },
  ],
});
