import React, { useContext, useMemo } from 'react';
import { MyContext } from '@/store/context-manager';
import SwipePage from './SwipePage';
import AliceCarousel from 'react-alice-carousel';

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

    const ListView = useMemo(() => {
        return invoiceList.data.map((item, i) => {
            const detail = allDetail[item.dataLink];
            const years = Number(item.year) + 1911;
            return (
                <SwipePage
                    invoiceList={invoiceList}
                    item={item}
                    detail={detail}
                    years={years}
                    index={i}
                    onSlideChanged={onSlideChanged} />
            )
        })
    }, [invoiceList.length])


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