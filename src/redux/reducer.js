import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  tshirts: [],
  cart: [],
  searchedData: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tshirts: payload,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        tshirts: [],
      };
    case types.ADD_TO_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: [...state.cart, payload],
      };
    case types.ADD_TO_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        cart: [],
      };
    case types.DELETE_CART_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.DELETE_CART_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: [...state.cart.filter((item) => item.id !== payload)],
      };
    case types.DELETE_CART_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        cart: [],
      };
    case types.SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.SEARCH_PRODUCT_SUCCESS:
      const filteredTshirts =
        payload.length > 0
          ? state.tshirts.filter((item) =>
              payload.every((word) =>
                Object.values(item).some(
                  (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(word)
                )
              )
            )
          : state.tshirts;
      return {
        ...state,
        isLoading: false,
        searchedData: filteredTshirts,
      };

    case types.SEARCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        cart: [],
      };
    case types.UPDATE_CART_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tshirts: payload,
      };
    case types.UPDATE_CART_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        cart: [],
      };
    default:
      return state;
  }
};
