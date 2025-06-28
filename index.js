// archivo: index.js
const express = require('express');
const puppeteer = require('puppeteer-extra');
const stealth = require('puppeteer-extra-plugin-stealth');
const cors = require("cors");
puppeteer.use(stealth());

const app = express();

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
    
    console.log(`[INFO] Scrape solicitado para: ${url}`);

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--single-process'
      ]
    });

    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    const html = await page.content();
    await browser.close();

    console.log(`[SUCCESS] Scrape completado para: ${url}`);
    res.send(html);
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});

app.get("/", function (req, res) {
  res.send("puppeteer API is running.");
});

app.listen(process.env.PORT ?? 3000, function () {
  console.log(`Listening on port ${process.env.PORT ?? 3000}...`);
});