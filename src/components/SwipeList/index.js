import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Style from './SwipeList.module.css'

const SwipeList = (props) => {
    const { invoiceList, allDetail } = props.data;
    const [activeIndex, setActiveIndex] = useState(0);
    const ListView = invoiceList.data.map(item => {
        const detail = allDetail[item.dataLink];
        const years = Number(item.year) + 1911;
        return (
            <div keys={item.dataLink} className={Style.swipeMain}>
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
                <div className={Style.swipeContent}>
                   
                    <div className={Style.detailContent}>
                        {detail.data.map((detailItem, k) => {
                            return (
                                <p key={`${item.dataLink}_${k}`}>&zwj;{detailItem.code}</p>
                            )
                        })}
                    </div>
                </div>

            </div>
        )
    })

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const onSlideChanged = ({ item }) => setActiveIndex(item);
    return (
        <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            // infinite
            items={ListView}
            activeIndex={activeIndex}
            onSlideChanged={onSlideChanged}
        />
    )
};

export default SwipeList