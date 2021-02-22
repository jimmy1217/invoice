const cheerio = require('cheerio')
import Cors from 'cors'
import corsMiddleware from '../../../lib/corsMiddleware'
import AWARD from '@/constants/AWARD'

const cors = corsMiddleware(
    Cors({
        methods: ['GET'],
    })
)

export default async (req, res) => {
    await cors(req, res)
    if (req.method === 'GET') {
        try {
            const { id } = req.query
            const url = `https://www.etax.nat.gov.tw/etw-main/web/${id}`
            const response = await fetch(url)
            const html = await response.text();
            const data = [];
            const $ = cheerio.load(html)

            $('.number').each((i, elem) => {
                const typeText = $(elem).prev().text();
                const type = AWARD.get(typeText) || 'unknown'

                let value = [];
                if ($(elem).text().trim().includes(' ')) {
                    value = $(elem).text().trim().split(' ')
                    value.map(item => {
                        data.push({ code: item, typeText, type });
                    })
                } else if ($(elem).text().trim().includes('、')) {
                    value = $(elem).text().trim().split('、')
                    value.map(item => {
                        data.push({ code: item, typeText, type });
                    })
                } else {
                    value = $(elem).text().trim()
                    data.push({ code: value, typeText, type });
                }
            })

            const source = $('.des p').eq(0).text() || $('.des p').eq(1).text() || $('.des div').eq(0).text();
            const desc = source.split('，')[0]?.replace(/[\s]|、|1\.|１/g, '') ?? '';
            res.json({
                data,
                desc
            })
        } catch (error) {
            return res.json({
                data: [],
                error: `res error`
            })
        }
    }
}