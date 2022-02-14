import {
    ADD_CUSTOMER,
    // GET_COUNTRY, GET_COUNTRY_ERROR
} from '../actions/types';

const initialState = {
    customers: [],
    // getCountry: '',
    // error:null
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER :
            return { ...state, customers: action.payload };
        // case GET_COUNTRY:
        //     return { ...state, getCountry: action.payload };
        //     case  GET_COUNTRY_ERROR:        
        //         return {
        //             ...state,
        //             error: action.payload
        //         }    
        default:
            return state;
    }
}