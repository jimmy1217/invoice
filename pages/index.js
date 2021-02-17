import React, { useEffect } from 'react';
const cheerio = require('cheerio')

const fetchData = async () => {
    const res = await fetch('https://invoice-nine.vercel.app/list', { method: 'get' })
    const html = await res.text();
    const $ = cheerio.load(html)
    const data = JSON.parse($('#list_source').text())
    console.log(data)
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