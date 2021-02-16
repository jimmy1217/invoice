const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio')
const router = express.Router();

const listUrl = 'https://www.etax.nat.gov.tw/etw-main/web/ETW183W1/'

/* 取得列表 */
router.get('/list', function (req, res, next) {
  axios.get(listUrl).then(response => {
    const html = response.data;
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
    res.json({
      data
    })
  })
});

/* 取得明細 */
router.get('/detail/:id', function (req, res, next) {
  const { id } = req.params
  const url = `https://www.etax.nat.gov.tw/etw-main/web/${id}`
  axios.get(url).then(response => {
    const html = response.data;
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
  })
});

module.exports = router;
