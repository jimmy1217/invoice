import React, { useReducer, useEffect } from 'react'
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

    // const data = {
    //     "invoiceList": {
    //         "data": [
    //             {
    //                 "year": "109",
    //                 "monthRange": "11~12",
    //                 "dataLink": "ETW183W2_10911"
    //             },
    //             {
    //                 "year": "109",
    //                 "monthRange": "09~10",
    //                 "dataLink": "ETW183W2_10909"
    //             },
    //         ]
    //     },
    //     "allDetail": {
    //         "ETW183W2_10911": {
    //             "data": [
    //                 {
    //                     "code": "77815838",
    //                     "typeText": "特別獎",
    //                     "type": "ultimateAward"
    //                 },
    //                 {
    //                     "code": "39993297",
    //                     "typeText": "特獎",
    //                     "type": "specialAward"
    //                 },
    //                 {
    //                     "code": "59028801",
    //                     "typeText": "頭獎",
    //                     "type": "jackpot"
    //                 },
    //                 {
    //                     "code": "02813820",
    //                     "typeText": "頭獎",
    //                     "type": "jackpot"
    //                 },
    //                 {
    //                     "code": "06896234",
    //                     "typeText": "頭獎",
    //                     "type": "jackpot"
    //                 },
    //                 {
    //                     "code": "011",
    //                     "typeText": "增開六獎",
    //                     "type": "extendAward"
    //                 },
    //                 {
    //                     "code": "427",
    //                     "typeText": "增開六獎",
    //                     "type": "extendAward"
    //                 }
    //             ],
    //             "desc": "領獎期間自110年2月6日起至110年5月5日止"
    //         },
    //         "ETW183W2_10909": {
    //             "data": [
    //                 {
    //                     "code": "42024723",
    //                     "typeText": "特別獎",
    //                     "type": "ultimateAward"
    //                 },
    //                 {
    //                     "code": "64157858",
    //                     "typeText": "特獎",
    //                     "type": "specialAward"
    //                 },
    //                 {
    //                     "code": "68550826",
    //                     "typeText": "頭獎",
    //                     "type": "jackpot"
    //                 },
    //                 {
    //                     "code": "84643124",
    //                     "typeText": "頭獎",
    //                     "type": "jackpot"
    //                 },
    //                 {
    //                     "code": "46665810",
    //                     "typeText": "頭獎",
    //                     "type": "jackpot"
    //                 },
    //                 {
    //                     "code": "651",
    //                     "typeText": "增開六獎",
    //                     "type": "extendAward"
    //                 },
    //                 {
    //                     "code": "341",
    //                     "typeText": "增開六獎",
    //                     "type": "extendAward"
    //                 }
    //             ],
    //             "desc": "領獎期間自109年12月6日起至110年3月5日止"
    //         },
    //     }
    // }
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