import React, { useContext, useMemo } from 'react';
import { MyContext } from '@/store/context-manager';
import RangeSelect from '@/components/RangeSelect';
import Style from '@/components/SwipeList/SwipeList.module.css'

const SwipePage = ({ invoiceList, item, detail, years, index, activeIndex, onSlideChanged }) => {
    const { state, dispatch } = useContext(MyContext)
    const { overlayVisible } = state;
    const isVisible = overlayVisible === index;
    return useMemo(() => {
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