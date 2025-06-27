// archivo: index.js
const express = require('express');
const puppeteer = require('puppeteer-extra');
const stealth = require('puppeteer-extra-plugin-stealth');
const cors = require("cors");
puppeteer.use(stealth());

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

app.get('/scrape', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send('URL faltante');

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    const html = await page.content();
    await browser.close();

    res.send(html);
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});

app.get("/", (_, res) => {
  res.send("puppeteer API is running.");
});

app.listen(port, () => {
  console.log(`Puppeteer scraper corriendo en http://localhost:${port}`);
});
