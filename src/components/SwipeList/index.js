import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Style from './SwipeList.module.css'

const RangeSelect = ({ item, invoiceList, index, onSlideChanged }) => {
    const monthsData = invoiceList.data
        .map((originItem, k) => ({
            ...originItem,
            year: Number(originItem.year) + 1911,
            pageIndex: k
        }))
        .filter((item, i) => i >= index - 2 && i < index + 6)
        .splice(0, 5)
    return (
        <div className={`${Style.roundTitle} ${Style.circleRound}`}>
            {<div className={`${Style.rangeTitle} ${Style.circleRound}`}>
                {item.monthRange}
            </div>}
            {
                <div className={`${Style.selectRange}`} >
                    {monthsData.map(monthItem =>
                        <span
                            key={`${index}_${monthItem.pageIndex}`}
                            onClick={() => {
                                onSlideChanged({ item: monthItem.pageIndex })
                            }}>
                            <p>{monthItem.year}</p>
                            <h3>{monthItem.monthRange}</h3>
                        </span>)}

                </div>}
        </div>
    )
}



const ListItem = ({ invoiceList, item, detail, years, index, activeIndex, onSlideChanged }) => {
    return (
        <div key={`${years}${item.dataLink}`} className={Style.swipeMain}>
            <div className={Style.monthHeader}>
                <RangeSelect item={item} invoiceList={invoiceList} index={index} onSlideChanged={onSlideChanged} />
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
    return false
    // return !(nextProps.activeIndex === nextProps.index)
}

const ListItemComponent = React.memo(ListItem, ListEqual)

const SwipeList = (props) => {
    const { invoiceList, allDetail } = props.data;
    const [activeIndex, setActiveIndex] = useState(0);
    const onSlideChanged = ({ item }) => {
        setActiveIndex(item)
    };

    const ListView = invoiceList.data.map((item, i) => {
        const detail = allDetail[item.dataLink];
        const years = Number(item.year) + 1911;
        return (
            <ListItemComponent
                invoiceList={invoiceList}
                item={item}
                detail={detail}
                years={years}
                index={i}
                activeIndex={activeIndex}
                onSlideChanged={onSlideChanged} />
        )
    })

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