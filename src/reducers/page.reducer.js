import { TOGGLE_SIDE_NAV } from "../constants/action-types";

const initialState = {
    sidenav: {
        isActive: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDE_NAV:
            return {
                ...state,
                sidenav: {
                    isActive: !state.sidenav.isActive
                }
            }

        default:
            return state
    }
}

export default reducer;