const puppeteer = require("puppeteer");
const { path } = require('./path');

const { generateText, checkAndGenerate } = require("./util");

// import is not a syntax natively supported by jest
// import {generateText} from  './util';

//globally available function provided by jest
//Unit test
test("should output name and age", () => {
  const text = generateText("Song", 88);
  expect(text).toBe("Song (88 years old)");
});

//Integration test
test("should generate a valid text output", () => {
  const text = checkAndGenerate("Yoda", 1004);
  expect(text).toBe("Yoda (1004 years old)");
});

test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: true
    // slowMo: 80,
    // args: ['--window-size=1920,1080']
  });

  const page = await browser.newPage();
  await page.goto(path);
  await page.click("input#name");
  await page.type("input#name", "SuperTrump");
  await page.click("input#age");
  await page.type("input#age", "28");
  await page.click("#btnAddUser");

  //eval => get access to element
  const finalText = await page.$eval(".user-item", el => el.textContent);
  expect(finalText).toBe("SuperTrump (28 years old)");
}, 10000);
