const puppeteer = require("puppeteer");
function Page(url) {
  this.url = url;
  this.curUrl = url;

  this.scrapePage = async function () {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();

    await page.goto(this.curUrl);

    nextPage = await page.$eval("#next", (link) => link.getAttribute("href"));
    const text = await page.$eval("#arrticle", (text) => text.innerText);
    return await text;
    await browser.close();
  };
  this.nextPage = async function () {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();

    await page.goto(this.curUrl);

    this.curUrl = await page.$eval("#next", (link) =>
      link.getAttribute("href"),
    );
  };
}
module.exports = Page;
