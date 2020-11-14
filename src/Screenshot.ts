import puppeteer from 'puppeteer';
import ITakeScreenshot from './ITakeScreenshot';

export default class Screenshot {
  static async Take(take: ITakeScreenshot) {
    const browser = await puppeteer.launch({
      defaultViewport: {
        width: take.width,
        height: take.height,
        isLandscape: true
      },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto(take.url, { waitUntil: "networkidle2" });
    await page.screenshot({ path: take.path });
    await browser.close();
  }
}