const List = (props) => {
    return (
        <pre id="list_source">{JSON.stringify(props.invoiceList)}</pre>
    )
}

export async function getStaticProps(context) {
    const invoiceListRes = await fetch('https://invoice-nine.vercel.app/api/list')
    const invoiceList = await invoiceListRes.json()
    return {
        props: {
            invoiceList:invoiceList
        },
        revalidate: 1, // In seconds
    }
}

export default List