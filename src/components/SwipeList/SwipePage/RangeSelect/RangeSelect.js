import React, { useContext, useMemo } from 'react';
import { MyContext } from '@/store/context-manager';
import MONTH from '@/constants/MONTH'
import Style from '@/components/SwipeList/SwipeList.module.css'


const RangeSelect = ({ item, invoiceList, index, onSlideChanged }) => {
    const { state, dispatch } = useContext(MyContext)
    const { overlayVisible, activeIndex } = state;
    const isVisible = overlayVisible === index;
    return useMemo(() => {
        return (
            <div className={`${Style.roundTitle}`}>
                <div className={`${Style.rangeTitle}`}
                    onClick={() => {
                        dispatch({
                            type: 'overlay_open', payload: {
                                overlayIndex: index
                            }
                        })
                    }}>
                    <p className={`${isVisible ? Style.active : ''}`}>{item.monthRange}月</p>
                    <h2>{MONTH.get(item.monthRange)}</h2>
                </div>
            </div>
        )
    }, [isVisible, activeIndex === index])
}

export default RangeSelect