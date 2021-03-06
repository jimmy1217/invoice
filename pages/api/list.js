const cheerio = require('cheerio')
import Cors from 'cors'
import corsMiddleware from '../../lib/corsMiddleware'

const cors = corsMiddleware(
    Cors({
        methods: ['GET'],
    })
)

const listUrl = 'https://www.etax.nat.gov.tw/etw-main/web/ETW183W1/'

export default async (req, res) => {
    await cors(req, res)
    if (req.method === 'GET') {
        try {
            const response = await fetch(listUrl)
            const html = await response.text();
            const data = [];
            const $ = cheerio.load(html)
            $('#fbonly tbody tr td a').filter((i, elem) => $(elem).text().split('、').length > 1).each((i, elem) => {
                const titleString = $(elem).text();
                const year = titleString.split('年')[0];
                const re = /月/gi;
                const monthRange = titleString.split('年')[1].replace('、', '~').replace(re, '');
                const dataLink = $(elem).attr('href').split('/web/')[1]
                data.push({
                    year,
                    monthRange,
                    dataLink
                })
            })
            res.statusCode = 200;
            return res.json({
                data
            })
        } catch (error) {
            return res.json({
                data: [],
                error: `res error`
            })
        }
    }
}