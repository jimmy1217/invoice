export const rootReducer_initState = {
    overlayVisible: null,
    activeIndex: 0,
};

export const rootReducer = (state, action) => {
    switch (action.type) {
        case 'overlay_open': return Object.assign({}, state, { overlayVisible: action.payload.overlayIndex });
        case 'overlay_close': return Object.assign({}, state, { overlayVisible: null });
        case 'set_active': return Object.assign({}, state, { activeIndex: action.payload.activeIndex });
        default: return state;
    }
}
