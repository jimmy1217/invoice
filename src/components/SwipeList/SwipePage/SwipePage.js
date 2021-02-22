import React, { useContext, useMemo } from 'react';
import { MyContext } from '@/store/context-manager';
import RangeSelect from './RangeSelect';
import Style from '@/components/SwipeList/SwipeList.module.css'
import { GiSwirlString } from "react-icons/gi";

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
                    <h5>
                        {years}
                    </h5>
                    <div className={Style.iconBG}><GiSwirlString /></div>
                </div>
                <div className={`${Style.swipeContent}`}>
                    <div className={Style.descContent}>
                        <div>
                            <small className={Style.smallTitle}>領獎期限</small>
                            <p>
                                {detail.desc}
                            </p>
                        </div>
                        <div>
                            <small className={Style.smallTitle}>快速比對</small>
                            <p className={Style.result}>
                                {resultCode}
                            </p>
                        </div>
                    </div>
                    <div className={Style.detailContent}>
                        {detail.data.map((detailItem, k) => {
                            const shortCode = String(detailItem.code).substr(-3, String(detailItem.code).length);
                            return (
                                <React.Fragment>
                                    {k === 0 &&
                                        <div key={`${item.dataLink}_${k}`} className={`${Style[detailItem.type]} ${Style.detailRow}`}>
                                            <div><small className={Style.smallTitle}>中獎類型</small></div>
                                            <div><small className={Style.smallTitle}>中獎號</small></div>
                                        </div>
                                    }
                                    <div key={`${item.dataLink}_${k}`} className={`${Style[detailItem.type]} ${Style.detailRow}`}>
                                        <div>{detailItem.typeText}</div>
                                        <div data-short={shortCode}>&zwj;{detailItem.code}</div>
                                        {/* &zwj;{shortCode} */}
                                    </div>
                                    {detailItem.type === 'specialAward' && <hr className={Style.hr} />}
                                </React.Fragment>

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