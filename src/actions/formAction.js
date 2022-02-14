import {
  ADD_CUSTOMER,
  // GET_COUNTRY, GET_COUNTRY_ERROR
} from './types'

export const addCustomer = (customer) => {
  return {
      type: ADD_CUSTOMER,
      payload: customer
  }
}



