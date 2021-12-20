import axios from 'axios'

import { PRODUCT_LIST_REQUEST, 
         PRODUCT_LIST_SUCCESS, 
         PRODUCT_LIST_FAIL, 
         PRODUCT_DETAILS_REQUEST, 
         PRODUCT_DETAILS_SUCCESS, 
         PRODUCT_DETAILS_FAIL }     
        from "../constants/productConstants.js";



export const ListProducts = () => async (dispatch) => {
    try{
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('/api/products');
        dispatch ({
            type: PRODUCT_LIST_SUCCESS,
            payload: data 
        })
    } catch(error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.message ? error.response.data.message : error.message 
        })
    }
}


export const listProductDetails = (id) => async (dispatch) => {

    console.log('inside product details reducers');
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        console.log('sending api request')
        const {data} = await axios.get(`/api/products/${id}`);
        console.log('sent api request')
        dispatch ({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data 
        })
    } catch(error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.message ? error.response.data.message : error.message 
        })
    }
}