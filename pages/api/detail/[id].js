const cheerio = require("cheerio");
import Cors from "cors";
import corsMiddleware from "../../../lib/corsMiddleware";
import AWARD from "@/constants/AWARD";

const cors = corsMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async (req, res) => {
  await cors(req, res);
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const url = `https://invoice.etax.nat.gov.tw/${id}`;
      const response = await fetch(url);
      const html = await response.text();
      const data = [];
      const $ = cheerio.load(html);

      $(".etw-web .etw-color-red").each((e, elem) => {
        const typeText = $(elem).parents("td").prev().text();
        const type = AWARD.get(typeText) || "unknown";
        const redValue = $(elem).text();
        const preValue = $(elem)?.prev()?.text() ?? "";
        const value = String(preValue + redValue).trim();
        data.push({
          code: value,
          typeText,
          type,
        });
      });

      const desc = $(".etw-color-redbrown").text();

      res.json({
        data,
        desc,
      });
    } catch (error) {
      return res.json({
        data: [],
        error: `res error`,
      });
    }
  }
};
