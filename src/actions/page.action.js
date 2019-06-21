import { TOGGLE_SIDE_NAV } from "../constants/action-types";

export const toggleSideNav = () => dispatch => {
    dispatch({
        type: TOGGLE_SIDE_NAV
    })
}