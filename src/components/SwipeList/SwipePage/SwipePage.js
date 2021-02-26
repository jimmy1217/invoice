import React, { useContext, useMemo } from 'react';
import { MyContext } from '@/store/context-manager';
import RangeSelect from './RangeSelect';
import Style from '@/components/SwipeList/SwipeList.module.css'
import { GiSwirlString } from "react-icons/gi";

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        console.log(response)
        // statusChangeCallback(response);
    });
}

const SwipePage = ({ invoiceList, item, detail, years, index, onSlideChanged }) => {
    const { state, dispatch } = useContext(MyContext)
    const { overlayVisible, activeIndex } = state;
    const isVisible = overlayVisible === index;

    return useMemo(() => {
        const resultCode = detail.data.map(detailItem => String(detailItem.code)
            .substr(-1, String(detailItem.code).length))
            .sort((a, b) => Number(a) - Number(b))
            .join('')

        const monthsData = invoiceList.data
            .map((originItem, k) => ({
                ...originItem,
                year: Number(originItem.year) + 1911,
                pageIndex: k
            }))
            .filter((item, i) => i >= index - 2 && i < index + 6)
            .splice(0, 5)

        return (
            <div key={`${years}${item.dataLink}`} className={Style.swipeMain}>
                <div className={`${Style.monthHeader} ${isVisible ? Style.blur : ''}`}>
                    <RangeSelect item={item} invoiceList={invoiceList} index={index} onSlideChanged={onSlideChanged} />
                    <h5>
                        {years}
                    </h5>
                    <div className={Style.iconBG}><GiSwirlString /></div>
                </div>
                <div className={`${Style.swipeContent} ${isVisible ? Style.blur : ''}`}>
                    <div className={Style.descContent}>
                        <div id="fb-root"></div>
                        <div className="fb-login-button"
                            data-width=""
                            data-size="large"
                            data-button-type="continue_with"
                            data-layout="rounded"
                            data-auto-logout-link="true"
                            data-use-continue-as="false">
                        </div>
                        {/* <div onClick={() => {
                            checkLoginState()
                        }}> check Status</div> */}
                        {/* <div>
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
                        </div> */}
                    </div>
                    <div className={`${Style.detailContent} ${isVisible ? Style.blur : ''}`}>
                        {detail.data.map((detailItem, k) => {
                            const shortCode = String(detailItem.code).substr(-3, String(detailItem.code).length);
                            return (
                                <React.Fragment key={`${item.dataLink}_${k}`}>
                                    {k === 0 &&
                                        <div key={`${item.dataLink}_${k}_title`} className={`${Style[detailItem.type]} ${Style.detailRow}`}>
                                            <div><small className={Style.smallTitle}>中獎類型</small></div>
                                            <div><small className={Style.smallTitle}>中獎號</small></div>
                                        </div>
                                    }
                                    <div className={`${Style[detailItem.type]} ${Style.detailRow}`}>
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

                <MonthRange
                    isVisible={isVisible}
                    index={index}
                    monthsData={monthsData}
                    onSlideChanged={onSlideChanged}
                />
            </div>
        )
    }, [isVisible, activeIndex === index])
}

const MonthRange = ({
    isVisible,
    index,
    monthsData,
    onSlideChanged,
}) => {
    const { dispatch } = useContext(MyContext)
    return useMemo(() => {
        return (
            <div className={`${Style.selectRange} ${isVisible ? Style.active : ''}`} >
                {monthsData.map(monthItem => {
                    return (
                        <div
                            key={`${index}_${monthItem.pageIndex}`}
                            className={`${Style.rangeTitle}`}
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch({ type: 'overlay_close' })
                                setTimeout(() => {
                                    onSlideChanged({ item: monthItem.pageIndex })
                                }, 200)
                            }}>
                            <p>{monthItem.monthRange}月 {monthItem.year}</p>
                        </div>
                    )
                }
                )}
            </div>
        )
    }, [isVisible])
}

export default SwipePage