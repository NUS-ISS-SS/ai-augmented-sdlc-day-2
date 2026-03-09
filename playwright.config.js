import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://localhost:4173",
    headless: true,
  },
  webServer: {
    command: "npx vite --port 4173 --host",
    url: "http://localhost:4173",
    reuseExistingServer: true,
    timeout: 120000,
  },
});
