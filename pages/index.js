// const cheerio = require('cheerio')

// const fetchData = async () => {
//     const res = await fetch('https://invoice-nine.vercel.app/all', { method: 'get' })
//     const html = await res.text();
//     const $ = cheerio.load(html)
//     const list_data = JSON.parse($('#list_source').text())
//     const detail_data = JSON.parse($('#detail_source').text())
//     console.log(list_data)
//     console.log(detail_data)
// }


import { getAllData } from './../src/actions'
import SwipeList from "./../src/components/SwipeList";

const IndexPage = (props) => {
    // const data = props;
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
                        "code": "77815838"
                    },
                    {
                        "code": "39993297"
                    },
                    {
                        "code": "59028801"
                    },
                    {
                        "code": "02813820"
                    },
                    {
                        "code": "06896234"
                    },
                    {
                        "code": "011"
                    },
                    {
                        "code": "427"
                    }
                ]
            },
            "ETW183W2_10909": {
                "data": [
                    {
                        "code": "42024723"
                    },
                    {
                        "code": "64157858"
                    },
                    {
                        "code": "68550826"
                    },
                    {
                        "code": "84643124"
                    },
                    {
                        "code": "46665810"
                    },
                    {
                        "code": "651"
                    },
                    {
                        "code": "341"
                    }
                ]
            },
            "ETW183W2_10907": {
                "data": [
                    {
                        "code": "13362795"
                    },
                    {
                        "code": "27580166"
                    },
                    {
                        "code": "53227282"
                    },
                    {
                        "code": "35082085"
                    },
                    {
                        "code": "37175928"
                    },
                    {
                        "code": "987"
                    },
                    {
                        "code": "614"
                    }
                ]
            },
            "ETW183W2_10905": {
                "data": [
                    {
                        "code": "03016191"
                    },
                    {
                        "code": "62474899"
                    },
                    {
                        "code": "33657726"
                    },
                    {
                        "code": "06142620"
                    },
                    {
                        "code": "66429962"
                    },
                    {
                        "code": "790"
                    }
                ]
            },
            "ETW183W2_10903": {
                "data": [
                    {
                        "code": "91911374"
                    },
                    {
                        "code": "08501338"
                    },
                    {
                        "code": "57161318"
                    },
                    {
                        "code": "23570653"
                    },
                    {
                        "code": "47332279"
                    },
                    {
                        "code": "519"
                    }
                ]
            },
            "ETW183W2_10901": {
                "data": [
                    {
                        "code": "12620024"
                    },
                    {
                        "code": "39793895"
                    },
                    {
                        "code": "67913945"
                    },
                    {
                        "code": "09954061"
                    },
                    {
                        "code": "54574947"
                    },
                    {
                        "code": "007"
                    }
                ]
            },
            "ETW183W2_10811": {
                "data": [
                    {
                        "code": "59647042"
                    },
                    {
                        "code": "01260528"
                    },
                    {
                        "code": "01616970"
                    },
                    {
                        "code": "69921388"
                    },
                    {
                        "code": "53451508"
                    },
                    {
                        "code": "710"
                    },
                    {
                        "code": "585"
                    },
                    {
                        "code": "633"
                    }
                ]
            },
            "ETW183W2_10809": {
                "data": [
                    {
                        "code": "41482012"
                    },
                    {
                        "code": "58837976"
                    },
                    {
                        "code": "20379435"
                    },
                    {
                        "code": "47430762"
                    },
                    {
                        "code": "36193504"
                    },
                    {
                        "code": "693"
                    },
                    {
                        "code": "043"
                    },
                    {
                        "code": "425"
                    }
                ]
            },
            "ETW183W2_10807": {
                "data": [
                    {
                        "code": "45698621"
                    },
                    {
                        "code": "19614436"
                    },
                    {
                        "code": "96182420"
                    },
                    {
                        "code": "47464012"
                    },
                    {
                        "code": "62781818"
                    },
                    {
                        "code": "928"
                    },
                    {
                        "code": "899"
                    }
                ]
            },
            "ETW183W2_10805": {
                "data": [
                    {
                        "code": "46356460"
                    },
                    {
                        "code": "56337787"
                    },
                    {
                        "code": "93339845"
                    },
                    {
                        "code": "83390355"
                    },
                    {
                        "code": "80431063"
                    },
                    {
                        "code": "984"
                    },
                    {
                        "code": "240"
                    }
                ]
            },
            "ETW183W2_10803": {
                "data": [
                    {
                        "code": "03802602"
                    },
                    {
                        "code": "00708299"
                    },
                    {
                        "code": "33877270"
                    },
                    {
                        "code": "21772506"
                    },
                    {
                        "code": "61786409"
                    },
                    {
                        "code": "136"
                    },
                    {
                        "code": "022"
                    }
                ]
            },
            "ETW183W2_10801": {
                "data": [
                    {
                        "code": "00106725"
                    },
                    {
                        "code": "90819218"
                    },
                    {
                        "code": "13440631"
                    },
                    {
                        "code": "26650552"
                    },
                    {
                        "code": "09775722"
                    },
                    {
                        "code": "809"
                    },
                    {
                        "code": "264"
                    }
                ]
            },
            "ETW183W2_10711": {
                "data": [
                    {
                        "code": "88515559"
                    },
                    {
                        "code": "47551146"
                    },
                    {
                        "code": "83513656"
                    },
                    {
                        "code": "85250862"
                    },
                    {
                        "code": "61472404"
                    },
                    {
                        "code": "185"
                    },
                    {
                        "code": "079"
                    },
                    {
                        "code": "442"
                    }
                ]
            },
            "ETW183W2_10709": {
                "data": [
                    {
                        "code": "96363025"
                    },
                    {
                        "code": "69095110"
                    },
                    {
                        "code": "96745865"
                    },
                    {
                        "code": "98829035"
                    },
                    {
                        "code": "45984442"
                    },
                    {
                        "code": "292"
                    },
                    {
                        "code": "650"
                    },
                    {
                        "code": "230"
                    }
                ]
            },
            "ETW183W2_10707": {
                "data": [
                    {
                        "code": "73372972"
                    },
                    {
                        "code": "22315462"
                    },
                    {
                        "code": "91903003"
                    },
                    {
                        "code": "16228722"
                    },
                    {
                        "code": "03270598"
                    },
                    {
                        "code": "163"
                    },
                    {
                        "code": "983"
                    },
                    {
                        "code": "814"
                    }
                ]
            },
            "ETW183W2_10705": {
                "data": [
                    {
                        "code": "20048019"
                    },
                    {
                        "code": "02142605"
                    },
                    {
                        "code": "21240109"
                    },
                    {
                        "code": "78323535"
                    },
                    {
                        "code": "18549847"
                    },
                    {
                        "code": "706"
                    },
                    {
                        "code": "574"
                    }
                ]
            },
            "ETW183W2_10703": {
                "data": [
                    {
                        "code": "12342126"
                    },
                    {
                        "code": "80740977"
                    },
                    {
                        "code": "36822639"
                    },
                    {
                        "code": "38786238"
                    },
                    {
                        "code": "87204837"
                    },
                    {
                        "code": "991"
                    },
                    {
                        "code": "715"
                    }
                ]
            },
            "ETW183W2_10701": {
                "data": [
                    {
                        "code": "21735266"
                    },
                    {
                        "code": "91874254"
                    },
                    {
                        "code": "56065209"
                    },
                    {
                        "code": "05739340"
                    },
                    {
                        "code": "69001612"
                    },
                    {
                        "code": "591"
                    },
                    {
                        "code": "342"
                    }
                ]
            },
            "ETW183W2_10611": {
                "data": [
                    {
                        "code": "75350343"
                    },
                    {
                        "code": "67035249"
                    },
                    {
                        "code": "03696891"
                    },
                    {
                        "code": "79882491"
                    },
                    {
                        "code": "77486437"
                    },
                    {
                        "code": "055"
                    },
                    {
                        "code": "816"
                    },
                    {
                        "code": "292"
                    }
                ]
            },
            "ETW183W2_10609": {
                "data": [
                    {
                        "code": "26638985"
                    },
                    {
                        "code": "37266877"
                    },
                    {
                        "code": "15720791"
                    },
                    {
                        "code": "21230260"
                    },
                    {
                        "code": "55899892"
                    },
                    {
                        "code": "248"
                    },
                    {
                        "code": "285"
                    },
                    {
                        "code": "453"
                    }
                ]
            },
            "ETW183W2_10607": {
                "data": [
                    {
                        "code": "33612092"
                    },
                    {
                        "code": "06840705"
                    },
                    {
                        "code": "12182003"
                    },
                    {
                        "code": "48794532"
                    },
                    {
                        "code": "77127885"
                    },
                    {
                        "code": "136"
                    },
                    {
                        "code": "873"
                    },
                    {
                        "code": "474"
                    }
                ]
            },
            "ETW183W2_10605": {
                "data": [
                    {
                        "code": "99768846"
                    },
                    {
                        "code": "83660478"
                    },
                    {
                        "code": "70628612"
                    },
                    {
                        "code": "87596250"
                    },
                    {
                        "code": "97294175"
                    },
                    {
                        "code": "904"
                    }
                ]
            },
            "ETW183W2_10603": {
                "data": [
                    {
                        "code": "74748874"
                    },
                    {
                        "code": "82528918"
                    },
                    {
                        "code": "07836485"
                    },
                    {
                        "code": "13410946"
                    },
                    {
                        "code": "96152286"
                    },
                    {
                        "code": "996"
                    }
                ]
            },
            "ETW183W2_10601": {
                "data": [
                    {
                        "code": "82885130"
                    },
                    {
                        "code": "59729884"
                    },
                    {
                        "code": "04598625"
                    },
                    {
                        "code": "13193259"
                    },
                    {
                        "code": "87827366"
                    },
                    {
                        "code": "125"
                    }
                ]
            },
            "ETW183W2_10511": {
                "data": [
                    {
                        "code": "68789003"
                    },
                    {
                        "code": "53077074"
                    },
                    {
                        "code": "69796177"
                    },
                    {
                        "code": "76868760"
                    },
                    {
                        "code": "14952048"
                    },
                    {
                        "code": "000"
                    },
                    {
                        "code": "059"
                    },
                    {
                        "code": "478"
                    },
                    {
                        "code": "569"
                    }
                ]
            },
            "ETW183W2_10509": {
                "data": [
                    {
                        "code": "84568349"
                    },
                    {
                        "code": "89536536"
                    },
                    {
                        "code": "32149197"
                    },
                    {
                        "code": "47672189"
                    },
                    {
                        "code": "33669493"
                    },
                    {
                        "code": "161"
                    },
                    {
                        "code": "539"
                    },
                    {
                        "code": "838"
                    },
                    {
                        "code": "037"
                    }
                ]
            },
            "ETW183W2_10507": {
                "data": [
                    {
                        "code": "91909013"
                    },
                    {
                        "code": "95976127"
                    },
                    {
                        "code": "54845444"
                    },
                    {
                        "code": "41876525"
                    },
                    {
                        "code": "86331065"
                    },
                    {
                        "code": "352"
                    },
                    {
                        "code": "672"
                    },
                    {
                        "code": "731"
                    },
                    {
                        "code": "214"
                    }
                ]
            },
            "ETW183W2_10505": {
                "data": [
                    {
                        "code": "01099147"
                    },
                    {
                        "code": "55517602"
                    },
                    {
                        "code": "16246076"
                    },
                    {
                        "code": "78369053"
                    },
                    {
                        "code": "06816904"
                    },
                    {
                        "code": "021"
                    }
                ]
            },
            "ETW183W2_10503": {
                "data": [
                    {
                        "code": "18498950"
                    },
                    {
                        "code": "08513139"
                    },
                    {
                        "code": "21881534"
                    },
                    {
                        "code": "53050416"
                    },
                    {
                        "code": "85174778"
                    },
                    {
                        "code": "086"
                    }
                ]
            },
            "ETW183W2_10501": {
                "data": [
                    {
                        "code": "51730762"
                    },
                    {
                        "code": "67442563"
                    },
                    {
                        "code": "11036956"
                    },
                    {
                        "code": "55794786"
                    },
                    {
                        "code": "62610317"
                    },
                    {
                        "code": "079"
                    }
                ]
            },
            "ETW183W2_10411": {
                "data": [
                    {
                        "code": "91605081"
                    },
                    {
                        "code": "38187237"
                    },
                    {
                        "code": "93749881"
                    },
                    {
                        "code": "29592686"
                    },
                    {
                        "code": "68783835"
                    },
                    {
                        "code": "076"
                    },
                    {
                        "code": "313"
                    },
                    {
                        "code": "056"
                    }
                ]
            },
            "ETW183W2_10409": {
                "data": [
                    {
                        "code": "07332260"
                    },
                    {
                        "code": "20119263"
                    },
                    {
                        "code": "76833937"
                    },
                    {
                        "code": "28338875"
                    },
                    {
                        "code": "83689131"
                    },
                    {
                        "code": "096"
                    },
                    {
                        "code": "819"
                    },
                    {
                        "code": "105"
                    }
                ]
            },
            "ETW183W2_10407": {
                "data": [
                    {
                        "code": "54719495"
                    },
                    {
                        "code": "52704456"
                    },
                    {
                        "code": "95358086"
                    },
                    {
                        "code": "35867930"
                    },
                    {
                        "code": "14013695"
                    },
                    {
                        "code": "270"
                    },
                    {
                        "code": "432"
                    },
                    {
                        "code": "326"
                    }
                ]
            },
            "ETW183W2_10405": {
                "data": [
                    {
                        "code": "82930261"
                    },
                    {
                        "code": "43540459"
                    },
                    {
                        "code": "82267055"
                    },
                    {
                        "code": "72762106"
                    },
                    {
                        "code": "06820335"
                    },
                    {
                        "code": "420"
                    },
                    {
                        "code": "523"
                    },
                    {
                        "code": "554"
                    }
                ]
            },
            "ETW183W2_10403": {
                "data": [
                    {
                        "code": "46492032"
                    },
                    {
                        "code": "66224881"
                    },
                    {
                        "code": "06216938"
                    },
                    {
                        "code": "04296940"
                    },
                    {
                        "code": "86442491"
                    },
                    {
                        "code": "306"
                    },
                    {
                        "code": "403"
                    },
                    {
                        "code": "867"
                    }
                ]
            },
            "ETW183W2_10401": {
                "data": [
                    {
                        "code": "60538935"
                    },
                    {
                        "code": "50887710"
                    },
                    {
                        "code": "63856949"
                    },
                    {
                        "code": "39459262"
                    },
                    {
                        "code": "61944942"
                    },
                    {
                        "code": "022"
                    },
                    {
                        "code": "355"
                    },
                    {
                        "code": "038"
                    }
                ]
            },
            "ETW183W2_10311": {
                "data": [
                    {
                        "code": "33516538"
                    },
                    {
                        "code": "18290129"
                    },
                    {
                        "code": "43772058"
                    },
                    {
                        "code": "44517895"
                    },
                    {
                        "code": "45226602"
                    },
                    {
                        "code": "901"
                    },
                    {
                        "code": "659"
                    },
                    {
                        "code": "034"
                    },
                    {
                        "code": "955"
                    }
                ]
            },
            "ETW183W2_10309": {
                "data": [
                    {
                        "code": "22267127"
                    },
                    {
                        "code": "31075480"
                    },
                    {
                        "code": "35396804"
                    },
                    {
                        "code": "15352117"
                    },
                    {
                        "code": "54709991"
                    },
                    {
                        "code": "114"
                    },
                    {
                        "code": "068"
                    },
                    {
                        "code": "476"
                    },
                    {
                        "code": "970"
                    }
                ]
            },
            "ETW183W2_10307": {
                "data": [
                    {
                        "code": "16256820"
                    },
                    {
                        "code": "33378146"
                    },
                    {
                        "code": "92040881"
                    },
                    {
                        "code": "99971012"
                    },
                    {
                        "code": "70124883"
                    },
                    {
                        "code": "998"
                    },
                    {
                        "code": "741"
                    },
                    {
                        "code": "833"
                    },
                    {
                        "code": "732"
                    }
                ]
            },
            "ETW183W2_10305": {
                "data": [
                    {
                        "code": "94761178"
                    },
                    {
                        "code": "71959593"
                    },
                    {
                        "code": "36665808"
                    },
                    {
                        "code": "54185273"
                    },
                    {
                        "code": "18953944"
                    },
                    {
                        "code": "347"
                    },
                    {
                        "code": "790"
                    }
                ]
            },
            "ETW183W2_10303": {
                "data": [
                    {
                        "code": "54544448"
                    },
                    {
                        "code": "70349798"
                    },
                    {
                        "code": "76086228"
                    },
                    {
                        "code": "38205733"
                    },
                    {
                        "code": "17173614"
                    },
                    {
                        "code": "692"
                    },
                    {
                        "code": "326"
                    }
                ]
            },
            "ETW183W2_10301": {
                "data": [
                    {
                        "code": "34231966"
                    },
                    {
                        "code": "57287066"
                    },
                    {
                        "code": "29828540"
                    },
                    {
                        "code": "85564445"
                    },
                    {
                        "code": "39775689"
                    },
                    {
                        "code": "478"
                    },
                    {
                        "code": "219"
                    }
                ]
            },
            "ETW183W2_10211": {
                "data": [
                    {
                        "code": "79599463"
                    },
                    {
                        "code": "65421688"
                    },
                    {
                        "code": "10823414"
                    },
                    {
                        "code": "52261288"
                    },
                    {
                        "code": "59201577"
                    },
                    {
                        "code": "048"
                    },
                    {
                        "code": "913"
                    }
                ]
            },
            "ETW183W2_10209": {
                "data": [
                    {
                        "code": "46486534"
                    },
                    {
                        "code": "06509701"
                    },
                    {
                        "code": "73803836"
                    },
                    {
                        "code": "48342247"
                    },
                    {
                        "code": "12784009"
                    },
                    {
                        "code": "316"
                    },
                    {
                        "code": "226"
                    }
                ]
            },
            "ETW183W2_10207": {
                "data": [
                    {
                        "code": "71895847"
                    },
                    {
                        "code": "04949941"
                    },
                    {
                        "code": "04532693"
                    },
                    {
                        "code": "52951166"
                    },
                    {
                        "code": "82155062"
                    },
                    {
                        "code": "715"
                    }
                ]
            },
            "ETW183W2_10205": {
                "data": [
                    {
                        "code": "40148354"
                    },
                    {
                        "code": "64348046"
                    },
                    {
                        "code": "64782404"
                    },
                    {
                        "code": "88904036"
                    },
                    {
                        "code": "17250629"
                    },
                    {
                        "code": "516"
                    }
                ]
            },
            "ETW183W2_10203": {
                "data": [
                    {
                        "code": "13393774"
                    },
                    {
                        "code": "25894576"
                    },
                    {
                        "code": "43792479"
                    },
                    {
                        "code": "01973003"
                    },
                    {
                        "code": "71347425"
                    },
                    {
                        "code": "997"
                    }
                ]
            },
            "ETW183W2_10201": {
                "data": [
                    {
                        "code": "18623268"
                    },
                    {
                        "code": "23322026"
                    },
                    {
                        "code": "55296725"
                    },
                    {
                        "code": "65713406"
                    },
                    {
                        "code": "44395947"
                    },
                    {
                        "code": "436"
                    }
                ]
            },
            "ETW183W2_10111": {
                "data": [
                    {
                        "code": "87165494"
                    },
                    {
                        "code": "02818106"
                    },
                    {
                        "code": "59105591"
                    },
                    {
                        "code": "35149832"
                    },
                    {
                        "code": "40131517"
                    },
                    {
                        "code": "653"
                    },
                    {
                        "code": "106"
                    }
                ]
            },
            "ETW183W2_10109": {
                "data": [
                    {
                        "code": "15719324"
                    },
                    {
                        "code": "11661657"
                    },
                    {
                        "code": "64718986"
                    },
                    {
                        "code": "49313179"
                    },
                    {
                        "code": "29736314"
                    },
                    {
                        "code": "843"
                    },
                    {
                        "code": "927"
                    }
                ]
            },
            "ETW183W2_10107": {
                "data": [
                    {
                        "code": "64291909"
                    },
                    {
                        "code": "90961128"
                    },
                    {
                        "code": "96250863"
                    },
                    {
                        "code": "50493330"
                    },
                    {
                        "code": "28795588"
                    },
                    {
                        "code": "266"
                    },
                    {
                        "code": "045"
                    }
                ]
            },
            "ETW183W2_10105": {
                "data": [
                    {
                        "code": "29734661"
                    },
                    {
                        "code": "99028391"
                    },
                    {
                        "code": "91180939"
                    },
                    {
                        "code": "12753377"
                    },
                    {
                        "code": "22638178"
                    },
                    {
                        "code": "258"
                    },
                    {
                        "code": "066"
                    }
                ]
            }
        }
    }

    return <SwipeList data={data} />
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