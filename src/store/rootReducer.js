export const rootReducer_initState = {
    overlayVisible: false,
    activeIndex: 0,
};

export const rootReducer = (state, action) => {
    switch (action.type) {
        case 'overlay_open': return Object.assign({}, state, { overlayVisible: true });
        case 'overlay_close': return Object.assign({}, state, { overlayVisible: false });
        case 'set_active': return Object.assign({}, state, { activeIndex: action.payload.activeIndex });
        default: return state;
    }
}
