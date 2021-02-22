import React, { useReducer } from 'react'
import { MyContext } from '@/store/context-manager'
import { rootReducer, rootReducer_initState } from '@/store/rootReducer'
import { getAllData } from '@/actions/index'
import dynamic from 'next/dynamic'
const SwipeList = dynamic(() => import(/* webpackChunkName: "Component_SwipeList" */"./../src/components/SwipeList"), {
    ssr: false
})

const IndexPage = (props) => {
    // const data = props;
    const [state, dispatch] = useReducer(rootReducer, rootReducer_initState);

    const data = {
        "invoiceList": {
            "data": [
                {
                    "year": "109",
                    "monthRange": "11~12",
                    "dataLink": "ETW183W2_10911"
                },
                {
                    "year": "109",
                    "monthRange": "09~10",
                    "dataLink": "ETW183W2_10909"
                },
                {
                    "year": "109",
                    "monthRange": "07~08",
                    "dataLink": "ETW183W2_10907"
                },
                {
                    "year": "109",
                    "monthRange": "05~06",
                    "dataLink": "ETW183W2_10905"
                },
                {
                    "year": "109",
                    "monthRange": "03~04",
                    "dataLink": "ETW183W2_10903"
                },
                {
                    "year": "109",
                    "monthRange": "01~02",
                    "dataLink": "ETW183W2_10901"
                },
                {
                    "year": "108",
                    "monthRange": "11~12",
                    "dataLink": "ETW183W2_10811"
                },
                {
                    "year": "108",
                    "monthRange": "09~10",
                    "dataLink": "ETW183W2_10809"
                },
                {
                    "year": "108",
                    "monthRange": "07~08",
                    "dataLink": "ETW183W2_10807"
                },
                {
                    "year": "108",
                    "monthRange": "05~06",
                    "dataLink": "ETW183W2_10805"
                },
                {
                    "year": "108",
                    "monthRange": "03~04",
                    "dataLink": "ETW183W2_10803"
                },
                {
                    "year": "108",
                    "monthRange": "01~02",
                    "dataLink": "ETW183W2_10801"
                },
                {
                    "year": "107",
                    "monthRange": "11~12",
                    "dataLink": "ETW183W2_10711"
                },
                {
                    "year": "107",
                    "monthRange": "09~10",
                    "dataLink": "ETW183W2_10709"
                },
                {
                    "year": "107",
                    "monthRange": "07~08",
                    "dataLink": "ETW183W2_10707"
                },
                {
                    "year": "107",
                    "monthRange": "05~06",
                    "dataLink": "ETW183W2_10705"
                },
                {
                    "year": "107",
                    "monthRange": "03~04",
                    "dataLink": "ETW183W2_10703"
                },
                {
                    "year": "107",
                    "monthRange": "01~02",
                    "dataLink": "ETW183W2_10701"
                },
                {
                    "year": "106",
                    "monthRange": "11~12",
                    "dataLink": "ETW183W2_10611"
                },
                {
                    "year": "106",
                    "monthRange": "09~10",
                    "dataLink": "ETW183W2_10609"
                },
                {
                    "year": "106",
                    "monthRange": "07~08",
                    "dataLink": "ETW183W2_10607"
                },
                {
                    "year": "106",
                    "monthRange": "05~06",
                    "dataLink": "ETW183W2_10605"
                },
                {
                    "year": "106",
                    "monthRange": "03~04",
                    "dataLink": "ETW183W2_10603"
                },
                {
                    "year": "106",
                    "monthRange": "01~02",
                    "dataLink": "ETW183W2_10601"
                },
                {
                    "year": "105",
                    "monthRange": "11~12",
                    "dataLink": "ETW183W2_10511"
                },
                {
                    "year": "105",
                    "monthRange": "09~10",
                    "dataLink": "ETW183W2_10509"
                },
                {
                    "year": "105",
                    "monthRange": "07~08",
                    "dataLink": "ETW183W2_10507"
                },
                {
                    "year": "105",
                    "monthRange": "05~06",
                    "dataLink": "ETW183W2_10505"
                },
                {
                    "year": "105",
                    "monthRange": "03~04",
                    "dataLink": "ETW183W2_10503"
                },
                {
                    "year": "105",
                    "monthRange": "01~02",
                    "dataLink": "ETW183W2_10501"
                },
                {
                    "year": "104",
                    "monthRange": "11~12",
                    "dataLink": "ETW183W2_10411"
                },
                {
                    "year": "104",
                    "monthRange": "09~10",
                    "dataLink": "ETW183W2_10409"
                },
                {
                    "year": "104",
                    "monthRange": "07~08",
                    "dataLink": "ETW183W2_10407"
                },
                {
                    "year": "104",
                    "monthRange": "05~06",
                    "dataLink": "ETW183W2_10405"
                },
                {
                    "year": "104",
                    "monthRange": "03~04",
                    "dataLink": "ETW183W2_10403"
                },
                {
                    "year": "104",
                    "monthRange": "01~02",
                    "dataLink": "ETW183W2_10401"
                },
                {
                    "year": "103",
                    "monthRange": "11~12",
                    "dataLink": "ETW183W2_10311"
                },
                {
                    "year": "103",
                    "monthRange": "09~10",
                    "dataLink": "ETW183W2_10309"
                },
                {
                    "year": "103",
                    "monthRange": "07~08",
                    "dataLink": "ETW183W2_10307"
                },
                {
                    "year": "103",
                    "monthRange": "05~06",
                    "dataLink": "ETW183W2_10305"
                },
                {
                    "year": "103",
                    "monthRange": "03~04",
                    "dataLink": "ETW183W2_10303"
                },
                {
                    "year": "103",
                    "monthRange": "01~02",
                    "dataLink": "ETW183W2_10301"
                },
                {
                    "year": "102",
                    "monthRange": "11~12",
                    "dataLink": "ETW183W2_10211"
                },
                {
                    "year": "102",
                    "monthRange": "09~10",
                    "dataLink": "ETW183W2_10209"
                },
                {
                    "year": "102",
                    "monthRange": "07~08",
                    "dataLink": "ETW183W2_10207"
                },
                {
                    "year": "102",
                    "monthRange": "05~06",
                    "dataLink": "ETW183W2_10205"
                },
                {
                    "year": "102",
                    "monthRange": "03~04",
                    "dataLink": "ETW183W2_10203"
                },
                {
                    "year": "102",
                    "monthRange": "01~02",
                    "dataLink": "ETW183W2_10201"
                },
                {
                    "year": "101",
                    "monthRange": "11~12",
                    "dataLink": "ETW183W2_10111"
                },
                {
                    "year": "101",
                    "monthRange": "09~10",
                    "dataLink": "ETW183W2_10109"
                },
                {
                    "year": "101",
                    "monthRange": "07~08",
                    "dataLink": "ETW183W2_10107"
                },
                {
                    "year": "101",
                    "monthRange": "05~06",
                    "dataLink": "ETW183W2_10105"
                }
            ]
        },
        "allDetail": {
            "ETW183W2_10911": {
                "data": [
                    {
                        "code": "77815838",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "39993297",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "59028801",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "02813820",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "06896234",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "011",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "427",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10909": {
                "data": [
                    {
                        "code": "42024723",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "64157858",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "68550826",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "84643124",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "46665810",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "651",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "341",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10907": {
                "data": [
                    {
                        "code": "13362795",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "27580166",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "53227282",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "35082085",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "37175928",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "987",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "614",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10905": {
                "data": [
                    {
                        "code": "03016191",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "62474899",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "33657726",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "06142620",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "66429962",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "790",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10903": {
                "data": [
                    {
                        "code": "91911374",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "08501338",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "57161318",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "23570653",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "47332279",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "519",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10901": {
                "data": [
                    {
                        "code": "12620024",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "39793895",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "67913945",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "09954061",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "54574947",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "007",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10811": {
                "data": [
                    {
                        "code": "59647042",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "01260528",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "01616970",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "69921388",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "53451508",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "710",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "585",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "633",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10809": {
                "data": [
                    {
                        "code": "41482012",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "58837976",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "20379435",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "47430762",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "36193504",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "693",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "043",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "425",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10807": {
                "data": [
                    {
                        "code": "45698621",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "19614436",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "96182420",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "47464012",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "62781818",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "928",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "899",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10805": {
                "data": [
                    {
                        "code": "46356460",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "56337787",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "93339845",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "83390355",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "80431063",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "984",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "240",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10803": {
                "data": [
                    {
                        "code": "03802602",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "00708299",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "33877270",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "21772506",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "61786409",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "136",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "022",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10801": {
                "data": [
                    {
                        "code": "00106725",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "90819218",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "13440631",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "26650552",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "09775722",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "809",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "264",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10711": {
                "data": [
                    {
                        "code": "88515559",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "47551146",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "83513656",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "85250862",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "61472404",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "185",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "079",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "442",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10709": {
                "data": [
                    {
                        "code": "96363025",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "69095110",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "96745865",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "98829035",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "45984442",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "292",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "650",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "230",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10707": {
                "data": [
                    {
                        "code": "73372972",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "22315462",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "91903003",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "16228722",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "03270598",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "163",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "983",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "814",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10705": {
                "data": [
                    {
                        "code": "20048019",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "02142605",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "21240109",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "78323535",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "18549847",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "706",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "574",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10703": {
                "data": [
                    {
                        "code": "12342126",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "80740977",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "36822639",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "38786238",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "87204837",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "991",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "715",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10701": {
                "data": [
                    {
                        "code": "21735266",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "91874254",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "56065209",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "05739340",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "69001612",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "591",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "342",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10611": {
                "data": [
                    {
                        "code": "75350343",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "67035249",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "03696891",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "79882491",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "77486437",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "055",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "816",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "292",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10609": {
                "data": [
                    {
                        "code": "26638985",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "37266877",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "15720791",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "21230260",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "55899892",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "248",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "285",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "453",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10607": {
                "data": [
                    {
                        "code": "33612092",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "06840705",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "12182003",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "48794532",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "77127885",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "136",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "873",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "474",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10605": {
                "data": [
                    {
                        "code": "99768846",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "83660478",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "70628612",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "87596250",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "97294175",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "904",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10603": {
                "data": [
                    {
                        "code": "74748874",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "82528918",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "07836485",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "13410946",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "96152286",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "996",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10601": {
                "data": [
                    {
                        "code": "82885130",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "59729884",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "04598625",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "13193259",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "87827366",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "125",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10511": {
                "data": [
                    {
                        "code": "68789003",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "53077074",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "69796177",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "76868760",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "14952048",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "000",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "059",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "478",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "569",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10509": {
                "data": [
                    {
                        "code": "84568349",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "89536536",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "32149197",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "47672189",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "33669493",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "161",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "539",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "838",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "037",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10507": {
                "data": [
                    {
                        "code": "91909013",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "95976127",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "54845444",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "41876525",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "86331065",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "352",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "672",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "731",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "214",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10505": {
                "data": [
                    {
                        "code": "01099147",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "55517602",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "16246076",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "78369053",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "06816904",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "021",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10503": {
                "data": [
                    {
                        "code": "18498950",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "08513139",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "21881534",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "53050416",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "85174778",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "086",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10501": {
                "data": [
                    {
                        "code": "51730762",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "67442563",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "11036956",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "55794786",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "62610317",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "079",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10411": {
                "data": [
                    {
                        "code": "91605081",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "38187237",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "93749881",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "29592686",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "68783835",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "076",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "313",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "056",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10409": {
                "data": [
                    {
                        "code": "07332260",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "20119263",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "76833937",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "28338875",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "83689131",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "096",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "819",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "105",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10407": {
                "data": [
                    {
                        "code": "54719495",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "52704456",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "95358086",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "35867930",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "14013695",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "270",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "432",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "326",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10405": {
                "data": [
                    {
                        "code": "82930261",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "43540459",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "82267055",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "72762106",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "06820335",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "420",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "523",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "554",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10403": {
                "data": [
                    {
                        "code": "46492032",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "66224881",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "06216938",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "04296940",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "86442491",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "306",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "403",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "867",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10401": {
                "data": [
                    {
                        "code": "60538935",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "50887710",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "63856949",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "39459262",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "61944942",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "022",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "355",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "038",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10311": {
                "data": [
                    {
                        "code": "33516538",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "18290129",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "43772058",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "44517895",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "45226602",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "901",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "659",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "034",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "955",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10309": {
                "data": [
                    {
                        "code": "22267127",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "31075480",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "35396804",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "15352117",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "54709991",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "114",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "068",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "476",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "970",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10307": {
                "data": [
                    {
                        "code": "16256820",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "33378146",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "92040881",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "99971012",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "70124883",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "998",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "741",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "833",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "732",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10305": {
                "data": [
                    {
                        "code": "94761178",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "71959593",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "36665808",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "54185273",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "18953944",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "347",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "790",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10303": {
                "data": [
                    {
                        "code": "54544448",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "70349798",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "76086228",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "38205733",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "17173614",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "692",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "326",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10301": {
                "data": [
                    {
                        "code": "34231966",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "57287066",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "29828540",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "85564445",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "39775689",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "478",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "219",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10211": {
                "data": [
                    {
                        "code": "79599463",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "65421688",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "10823414",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "52261288",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "59201577",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "048",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "913",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10209": {
                "data": [
                    {
                        "code": "46486534",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "06509701",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "73803836",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "48342247",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "12784009",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "316",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "226",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10207": {
                "data": [
                    {
                        "code": "71895847",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "04949941",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "04532693",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "52951166",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "82155062",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "715",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10205": {
                "data": [
                    {
                        "code": "40148354",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "64348046",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "64782404",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "88904036",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "17250629",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "516",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10203": {
                "data": [
                    {
                        "code": "13393774",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "25894576",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "43792479",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "01973003",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "71347425",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "997",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10201": {
                "data": [
                    {
                        "code": "18623268",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "23322026",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "55296725",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "65713406",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "44395947",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "436",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10111": {
                "data": [
                    {
                        "code": "87165494",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "02818106",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "59105591",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "35149832",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "40131517",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "653",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "106",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10109": {
                "data": [
                    {
                        "code": "15719324",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "11661657",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "64718986",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "49313179",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "29736314",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "843",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "927",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10107": {
                "data": [
                    {
                        "code": "64291909",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "90961128",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "96250863",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "50493330",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "28795588",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "266",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "045",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            },
            "ETW183W2_10105": {
                "data": [
                    {
                        "code": "29734661",
                        "typeText": "特別獎",
                        "type": "ultimateAward"
                    },
                    {
                        "code": "99028391",
                        "typeText": "特獎",
                        "type": "specialAward"
                    },
                    {
                        "code": "91180939",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "12753377",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "22638178",
                        "typeText": "頭獎",
                        "type": "jackpot"
                    },
                    {
                        "code": "258",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    },
                    {
                        "code": "066",
                        "typeText": "增開六獎",
                        "type": "extendAward"
                    }
                ]
            }
        }
    }

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            <SwipeList data={data} />
        </MyContext.Provider>
    )

}
export default IndexPage

// export async function getStaticProps(context) {
//     const { invoiceList, allDetail } = await getAllData()
//     return {
//         props: {
//             invoiceList: invoiceList,
//             allDetail: allDetail
//         },
//         revalidate: 1, // In seconds
//     }
// }