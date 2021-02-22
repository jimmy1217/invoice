import React, { useReducer } from 'react'
import { MyContext } from '@/store/context-manager'
import { rootReducer, rootReducer_initState } from '@/store/rootReducer'
import { getAllData } from '@/actions/index'
import dynamic from 'next/dynamic'
const SwipeList = dynamic(() => import(/* webpackChunkName: "Component_SwipeList" */"./../src/components/SwipeList"), {
    ssr: false
})

const IndexPage = (props) => {
    const data = props;
    const [state, dispatch] = useReducer(rootReducer, rootReducer_initState);

    console.log(data)

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            <SwipeList data={data} />
        </MyContext.Provider>
    )

}
export default IndexPage

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