const cheerio = require("cheerio");
import Cors from "cors";
import corsMiddleware from "../../lib/corsMiddleware";

const cors = corsMiddleware(
  Cors({
    methods: ["GET"],
  })
);

const listUrl = "https://invoice.etax.nat.gov.tw/index.html";

export default async (req, res) => {
  await cors(req, res);
  if (req.method === "GET") {
    try {
      const response = await fetch(listUrl);
      const html = await response.text();
      const data = [];
      const $ = cheerio.load(html);
      $(".carousel-item a")
        .filter((i, elem) => !$(elem).text().includes("清冊"))
        .each((i, elem) => {
          const titleString = $(elem).text();
          const year = titleString.split("年")[0];
          const re = /月中獎號碼單/gi;
          const monthRange = titleString.split("年")[1].replace(re, "");
          const dataLink = $(elem).attr("href");
          data.push({
            year,
            monthRange,
            dataLink,
          });
        });
      res.statusCode = 200;
      return res.json({
        data,
      });
    } catch (error) {
      return res.json({
        data: [],
        error: `res error`,
      });
    }
  }
};
