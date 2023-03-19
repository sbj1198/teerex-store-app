import * as types from "./actionTypes";

export const getProducts = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return fetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: data })
    )
    .catch((error) => dispatch({ type: types.GET_PRODUCTS_FAILURE }));
};

export const addToCart = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TO_CART_REQUEST });
  dispatch({
    type: types.ADD_TO_CART_SUCCESS,
    payload,
  });
};

export const deleteCartItem = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CART_ITEM_REQUEST });
  dispatch({ type: types.DELETE_CART_ITEM_SUCCESS, payload: id });
};

export const searchProduct = (words) => (dispatch) => {
  dispatch({ type: types.SEARCH_PRODUCT_REQUEST });
  dispatch({
    type: types.SEARCH_PRODUCT_SUCCESS,
    payload: words,
  });
};

const updateCartItem = (item) => (dispatch) => {};
