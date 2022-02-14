import { SET_ALERT, REMOVE_ALERT } from './types'
import uuidv4 from 'uuid';

export const setAlert = (msg, type) => {
    const id = uuidv4();
    dispatchEvent({
        type: SET_ALERT,
        payload: { msg, type, id }
    });

    setTimeout(() =>
        dispatchEvent({
            type: REMOVE_ALERT,
            payload: id
        }), 5000);
};