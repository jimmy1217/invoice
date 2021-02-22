import React, { useContext, useMemo } from 'react';
import { MyContext } from '@/store/context-manager';
import MONTH from '@/constants/MONTH'
import Style from '@/components/SwipeList/SwipeList.module.css'


const RangeSelect = ({ item, invoiceList, index, onSlideChanged }) => {
    const { state, dispatch } = useContext(MyContext)
    const { overlayVisible, activeIndex } = state;
    const isVisible = overlayVisible === index;
    return useMemo(() => {
        const monthsData = invoiceList.data
            .map((originItem, k) => ({
                ...originItem,
                year: Number(originItem.year) + 1911,
                pageIndex: k
            }))
            .filter((item, i) => i >= index - 2 && i < index + 6)
            .splice(0, 5)

        return (
            <div className={`${Style.roundTitle} ${isVisible ? Style.active : ''}`}
                onClick={() => {
                    dispatch({
                        type: 'overlay_open', payload: {
                            overlayIndex: index
                        }
                    })
                }}
            >
                <div className={`${Style.rangeTitle}`}>
                    <p>{item.monthRange}月</p>
                    <h2>{MONTH.get(item.monthRange)}</h2>
                </div>
                <div className={`${Style.selectRange}`} >
                    {monthsData.map(monthItem =>
                        <span
                            key={`${index}_${monthItem.pageIndex}`}
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch({ type: 'overlay_close' })
                                setTimeout(() => {
                                    onSlideChanged({ item: monthItem.pageIndex })
                                }, 300)
                            }}>
                            <p>{monthItem.year}</p>
                            <h3>{monthItem.monthRange}</h3>
                        </span>)}
                </div>
            </div>
        )
    }, [isVisible, activeIndex === index])
}

export default RangeSelect