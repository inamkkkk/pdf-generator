const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

const generatePdf = async (html, filePath) => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  await page.setContent(html);

  // Ensure the 'pdfs' directory exists
  const dirPath = path.dirname(filePath);
  try {
      await fs.mkdir(dirPath, { recursive: true });
  } catch (err) {
      if (err.code !== 'EEXIST') {
          throw err;
      }
  }

  await page.pdf({ path: filePath, format: 'A4' });

  await browser.close();
};

module.exports = {
  generatePdf,
};