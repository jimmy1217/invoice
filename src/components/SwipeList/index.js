import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Style from './SwipeList.module.css'

let preIndex = 0;
let alice = {}

const DetailItem = ({ className, code }) => {
    return (
        <p className={className} >&zwj;{code}</p>
    )
}

function DetailEqual(prevProps, nextProps) {
    return !(prevProps.className !== nextProps.className)
}

const DetailItemComponent = React.memo(DetailItem, DetailEqual)


const ListItem = ({ item, detail, years, index, activeIndex, animate_name }) => {
    return (
        <div key={`${years}${item.dataLink}`} className={Style.swipeMain}>
            <div className={Style.monthHeader}>
                <div className={`${Style.roundTitle} ${Style.circleRound}`}>
                    <div className={`${Style.rangeTitle} ${Style.circleRound}`}>
                        {item.monthRange}
                    </div>
                </div>
                <h2>
                    {years}
                </h2>
            </div>
            <div className={`${Style.swipeContent}`}>
                <div className={Style.detailContent}>
                    {detail.data.map((detailItem, k) => {
                        return (
                            <DetailItemComponent key={`${item.dataLink}_${k}`} dataLink={item.dataLink} className={`animate__animated animate__faster animate__delay-${k} ${index === activeIndex ? animate_name : 'd-none'}`} code={detailItem.code} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function ListEqual(prevProps, nextProps) {
    return !(nextProps.activeIndex === nextProps.index || prevProps.activeIndex === nextProps.index)
}

const ListItemComponent = React.memo(ListItem, ListEqual)



const SwipeList = (props) => {
    const { invoiceList, allDetail } = props.data;
    const [activeIndex, setActiveIndex] = useState(0);
    const animate_name = activeIndex < preIndex ? 'animate__fadeInLeft' : 'animate__fadeInRight';
    preIndex = activeIndex
    const ListView = invoiceList.data.map((item, i) => {
        const detail = allDetail[item.dataLink];
        const years = Number(item.year) + 1911;
        return <ListItemComponent item={item} detail={detail} years={years} index={i} activeIndex={activeIndex} animate_name={animate_name} />
    })

    const onSlideChanged = ({ item }) => {
        setActiveIndex(item)
    };

    return (
        <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            items={ListView}
            activeIndex={activeIndex}
            onSlideChanged={onSlideChanged}
        />
    )
};

export default SwipeList