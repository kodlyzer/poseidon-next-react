import { NEW_OPERATION } from '../constants/action-types';
import { operation } from "../constants/new-operation.mock";

const initialState = {
    currentOperation: operation
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