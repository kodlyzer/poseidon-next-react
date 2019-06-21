// sample reducer to show combine 
import { NEW_OPERATION } from '../constants/action-types';

const initialState = {
    currentOperation: [] 
}

export default function (state = initialState, action) {
    switch (action.type) {
        case NEW_OPERATION:
            return {
                ...state,
                currentOperation: action.payload
            }
        default:
            return state
    }
}