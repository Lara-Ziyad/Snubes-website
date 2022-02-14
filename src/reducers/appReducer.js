// eslint-disable-next-line no-unused-vars
import { GET_SERVICES , DATA_ERROR, GET_RESONES, GET_LOGOS, GET_FOOTER, GET_SLIDER  } from '../actions/types'



const initialState = {

    services: [],
    resones: [],
    companies: [],
    customersLogo:[],
    footer:[],
    error:null
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES :
            return {
                ...state,
                services: action.payload
            };

        case GET_RESONES:
          
                return {
                    ...state,
                    resones: action.payload
                };
        
        case GET_SLIDER:
        
          
               return {
                      ...state,
                   companies: action.payload
               };
        
        case GET_LOGOS:
            // console.log(action.payload);
                return {
                     ...state,
                     customersLogo: action.payload
                };
        
        case GET_FOOTER :
          
            return {
                ...state,
                footer: action.payload
            }
     

    
        case  DATA_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}