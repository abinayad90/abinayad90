// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
timeout: 40 * 1000, // 40 secs or 40000 ms. default timeout is 30 secs
  },
  reporter: 'html',
  
use: {

  browserName : 'chromium',
  headless : false,
  trace: 'retain on failure',  //retain only when fails. Other option is on or off 
  sceenshot: 'on'
}
  
});

module.exports = config