import React, { useContext, useMemo } from 'react';
import { MyContext } from '@/store/context-manager';
import RangeSelect from './RangeSelect';
import Style from '@/components/SwipeList/SwipeList.module.css'
import { GiFlatPlatform } from "react-icons/gi";

const SwipePage = ({ invoiceList, item, detail, years, index, onSlideChanged }) => {
    const { state, dispatch } = useContext(MyContext)
    const { overlayVisible, activeIndex } = state;
    const isVisible = overlayVisible === index;
    return useMemo(() => {
        const resultCode = detail.data.map(detailItem => String(detailItem.code)
            .substr(-1, String(detailItem.code).length))
            .sort((a, b) => Number(a) - Number(b))
            .join('')
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
                            const shortCode = String(detailItem.code).substr(-3, String(detailItem.code).length);
                            console.log(shortCode)
                            return (
                                <p key={`${item.dataLink}_${k}`} className={Style[detailItem.type]}>
                                    {/* <span>{detailItem.typeText}</span> */}
                                    &zwj;{shortCode}
                                </p>
                            )
                        })}
                      
                        <div className={Style.result}>
                            {resultCode}
                        </div>
                    </div>
                </div>
                <div className={Style.iconBG}><GiFlatPlatform /></div>
                {isVisible &&
                    <div className={Style.overlay}
                        onClick={() => {
                            dispatch({ type: 'overlay_close' })
                        }}>
                    </div>}
            </div>
        )
    }, [isVisible, activeIndex === index])
}

export default SwipePage