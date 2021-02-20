import React, { useContext, useMemo } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Style from './SwipeList.module.css'
import { MyContext } from '@/store/context-manager';

const RangeSelect = ({ item, invoiceList, index, onSlideChanged, activeIndex }) => {
    const { state, dispatch } = useContext(MyContext)
    const { overlayVisible } = state;
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
            <div className={`${Style.roundTitle} ${Style.circleRound} ${isVisible ? Style.active : ''}`}
                onClick={() => {
                    dispatch({
                        type: 'overlay_open', payload: {
                            overlayIndex: index
                        }
                    })
                }}
            >
                <div className={`${Style.rangeTitle} ${Style.circleRound}`}>
                    {item.monthRange}
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


const ListItem = ({ invoiceList, item, detail, years, index, activeIndex, onSlideChanged }) => {
    const { state, dispatch } = useContext(MyContext)
    const { overlayVisible } = state;
    const isVisible = overlayVisible === index;
    return useMemo(() => {
        return (
            <div key={`${years}${item.dataLink}`} className={Style.swipeMain}>
                <div className={Style.monthHeader}>
                    <RangeSelect item={item} invoiceList={invoiceList} index={index} activeIndex={activeIndex} onSlideChanged={onSlideChanged} />
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

const SwipeList = (props) => {
    const { invoiceList, allDetail } = props.data;
    const { state, dispatch } = useContext(MyContext)
    const { activeIndex } = state;

    const cancelOverLay = () => {
        dispatch({ type: 'overlay_close' })
    }

    const onSlideChanged = ({ item }) => {
        dispatch({
            type: 'set_active',
            payload: {
                activeIndex: item
            }
        })
    };

    const ListView = invoiceList.data.map((item, i) => {
        const detail = allDetail[item.dataLink];
        const years = Number(item.year) + 1911;
        return (
            <ListItem
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
            onSlideChange={cancelOverLay}
            onSlideChanged={onSlideChanged}
        />
    )
};

export default SwipeList