import { NEW_OPERATION } from "../constants/action-types";
import { operation } from "../constants/new-operation.mock";

export const newOperation = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_OPERATION,
            payload: operation
        }))
}