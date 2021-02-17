const List = (props) => {
    return (
        <div>
            <pre id="list_source">{JSON.stringify(props.invoiceList)}</pre>
            <pre id="detail_source">{JSON.stringify(props.allDetail)}</pre>
        </div>

    )
}

export async function getStaticProps(context) {
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

    return {
        props: {
            invoiceList: invoiceList,
            allDetail: allDetail
        },
        revalidate: 1, // In seconds
    }
}

export default List