import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Style from './SwipeList.module.css'

let preIndex = 0;
const ListItem = ({ item, detail, years, index, activeIndex }) => {
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
                            <p key={`${item.dataLink}_${k}`} >&zwj;{detailItem.code}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function ListEqual(prevProps, nextProps) {
    return !(nextProps.activeIndex === nextProps.index)
}

const ListItemComponent = React.memo(ListItem, ListEqual)

const SwipeList = (props) => {
    const { invoiceList, allDetail } = props.data;
    const [activeIndex, setActiveIndex] = useState(0);
    preIndex = activeIndex
    const ListView = invoiceList.data.map((item, i) => {
        const detail = allDetail[item.dataLink];
        const years = Number(item.year) + 1911;
        return <ListItemComponent item={item} detail={detail} years={years} index={i} activeIndex={activeIndex} />
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