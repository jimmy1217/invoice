import { getAllData } from '@/actions/index'

const List = (props) => {
    return (
        <div>
            <pre id="list_source">{JSON.stringify(props.invoiceList)}</pre>
            <pre id="detail_source">{JSON.stringify(props.allDetail)}</pre>
        </div>

    )
}

export async function getStaticProps(context) {
    const { invoiceList, allDetail } = await getAllData()
    return {
        props: {
            invoiceList: invoiceList,
            allDetail: allDetail
        },
        revalidate: 1, // In seconds
    }
}

export default List