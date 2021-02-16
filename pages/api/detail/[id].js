const cheerio = require('cheerio')
const Cors = require('cors')
const cors = Cors({
    method: ['GET']
})

function corsMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }
            return resolve(result)
        })
    })
}

export default async (req, res) => {
    await corsMiddleware(req, res, cors)
    if (req.method === 'GET') {
        try {
            const { id } = req.query
            const url = `https://www.etax.nat.gov.tw/etw-main/web/${id}`
            const response = await fetch(url)
            const html = await response.text();
            const data = [];
            const $ = cheerio.load(html)

            $('.number').each((i, elem) => {
                let value = [];
                if ($(elem).text().trim().includes(' ')) {
                    value = $(elem).text().trim().split(' ')
                    value.map(item => {
                        data.push({ code: item });
                    })
                } else if ($(elem).text().trim().includes('、')) {
                    value = $(elem).text().trim().split('、')
                    value.map(item => {
                        data.push({ code: item });
                    })
                } else {
                    value = $(elem).text().trim()
                    data.push({ code: value });
                }
            })
            res.json({
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