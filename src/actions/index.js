export const getAllData = async () => {
    const invoiceListRes = await fetch('https://invoice-nine.vercel.app/api/list')
    const invoiceList = await invoiceListRes.json()
    const fetchUnit = async (detailUrl) => {
        const res = await fetch(`https://invoice-nine.vercel.app/api/detail/${detailUrl}`);
        return await res.json();
    };
    const allPromise = invoiceList.data.map(item => {
        return fetchUnit(item.dataLink)
    })
    const allRes = await Promise.all(allPromise)
    const allDetail = invoiceList.data.reduce((pre, item, i) => {
        pre[item.dataLink] = allRes[i]
        return pre
    }, {})
    
    return ({
        invoiceList,
        allDetail,
    })
}