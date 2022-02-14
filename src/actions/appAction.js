import { GET_SERVICES , GET_RESONES , DATA_ERROR, GET_LOGOS, GET_FOOTER ,GET_SLIDER   } from './types'

export const getServices = () => async dispatch => {
    try {
        const res = await fetch('/services');
        const data = await res.json();
    
        dispatch({
          type: GET_SERVICES,
          payload: data
        });
      } catch (err) {
        dispatch({
          type: DATA_ERROR ,
          payload: err.response
        });
      }
   
}
export const getWhy = () => async dispatch => {

  try {
      const res = await fetch('/resones');
      const resones = await res.json();
      
      dispatch({
        type: GET_RESONES ,
        payload:resones
      });
    } catch (err) {
      dispatch({
        type: DATA_ERROR ,
        payload: err.response
      });
    }
 
}


export const getcustomersLogo = () => async dispatch => {

  try {
      const res = await fetch('/customersLogo');
    const customers = await res.json();

      dispatch({
        type: GET_LOGOS ,
        payload: customers
      });
    } catch (err) {
      dispatch({
        type: DATA_ERROR ,
        payload: err.response
      });
    }
 
}


export const getFooter = () => async dispatch => {

  try {
      const res = await fetch('/footer');
    const footer = await res.json();
    // console.log(footer);
   
      dispatch({
        type: GET_FOOTER,
        payload: footer
      });
   
    } catch (err) {
      dispatch({
        type: DATA_ERROR ,
        payload: err.response
      });
    }
 
}


export const getSlidesInfo = () => async dispatch => {

  try {
    const res = await fetch('/slides');
  const slides = await res.json();

 
    dispatch({
      type: GET_SLIDER ,
      payload: slides
    });
 
  } catch (err) {
    dispatch({
      type: DATA_ERROR ,
      payload: err.response
    });
  }
 
}





