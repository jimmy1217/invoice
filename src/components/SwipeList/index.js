import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
const SwipeList = (props) => {
    const { invoiceList, allDetail } = props.data;
    const [activeIndex, setActiveIndex] = useState(0);
    const ListView = invoiceList.data.map(item=>{
        const detail = allDetail[item.dataLink];
        return (
            <div keys={item.dataLink}>
                {item.year} - {item.monthRange}

                <div>
                    {detail.data.map((detailItem,k)=>{
                        return (
                            <p key={`${item.dataLink}_${k}`}>{detailItem.code}</p>
                        )
                    })}
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