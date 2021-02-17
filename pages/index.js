import React, { useEffect } from 'react';

const fetchData = async () => {
    const res = await fetch('https://invoice-nine.vercel.app/list')
    console.log(res.data)
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