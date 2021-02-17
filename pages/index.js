import React, { useEffect } from 'react';
const cheerio = require('cheerio')

const fetchData = async () => {
    const res = await fetch('https://invoice-nine.vercel.app/all', { method: 'get' })
    const html = await res.text();
    const $ = cheerio.load(html)
    const list_data = JSON.parse($('#list_source').text())
    const detail_data = JSON.parse($('#detail_source').text())
    console.log(list_data)
    console.log(detail_data)
}

const IndexPage = () => {
    useEffect(() => {
        fetchData()
        console.log('did ')
    }, []);
    return (
        <div>
            <p>List API - https://invoice-nine.vercel.app/api/list</p>
            <p>Detail API - https://invoice-nine.vercel.app/api/detail/{"{dataLink_id}"}</p>
        </div>
    )
}
export default IndexPage