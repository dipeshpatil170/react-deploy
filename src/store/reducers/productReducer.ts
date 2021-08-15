import {
   DECREMENT_PRODUCT_QUANTITY_FAILURE,
   DECREMENT_PRODUCT_QUANTITY_REQUEST,
   DECREMENT_PRODUCT_QUANTITY_SUCCESS,
   FETCH_PRODUCTS_FAILURE,
   FETCH_PRODUCTS_REQUEST,
   FETCH_PRODUCTS_SUCCESS,
   INCREMENT_PRODUCT_QUANTITY_FAILURE,
   INCREMENT_PRODUCT_QUANTITY_REQUEST,
   INCREMENT_PRODUCT_QUANTITY_SUCCESS,
} from '../../types/Types'

const initialState: ProductState = {
   products: [],
   product: {
      name: '',
      price: 0,
      quantity: 0,
      image: {},
      id: 0,
   },
   isProductFetching: false,
   isProductFetchSuccess: false,
   isProductFetchError: false,
   errorProductFetchMessage: '',
   isDecrementProductQuantitySuccess: false,
   isDecrementProductQuantityError: false,
   errorDecrementProductQuantityMessage: '',
   isIncrementProductQuantitySuccess: false,
   isIncrementProductQuantityError: false,
   errorIncrementProductQuantityMessage: '',
}
export const productReducer = (
   state = initialState,
   action: ProductAction
): ProductState => {
   switch (action?.type) {
      case FETCH_PRODUCTS_REQUEST:
         return {
            ...state,
            isProductFetching: true,
         }

      case FETCH_PRODUCTS_SUCCESS:
         return {
            ...state,
            isProductFetching: false,
            isProductFetchSuccess: true,
            products: action?.payload?.products,
         }

      case FETCH_PRODUCTS_FAILURE:
         return {
            ...state,
            isProductFetching: false,
            isProductFetchError: true,
            errorProductFetchMessage: action?.payload?.errorProductFetchMessage,
         }

      case DECREMENT_PRODUCT_QUANTITY_REQUEST:
         return {
            ...state,
            isProductFetching: true,
         }

      case DECREMENT_PRODUCT_QUANTITY_SUCCESS:
         return {
            ...state,
            isProductFetching: false,
            isDecrementProductQuantitySuccess: true,
            products: state.products.map((product) =>
               product.id === action.payload.product.id
                  ? action.payload.product
                  : product
            ),
         }

      case DECREMENT_PRODUCT_QUANTITY_FAILURE:
         return {
            ...state,
            isProductFetching: false,
            isDecrementProductQuantityError: true,
            errorDecrementProductQuantityMessage:
               action?.payload?.errorDecrementProductQuantityMessage,
         }

      case INCREMENT_PRODUCT_QUANTITY_REQUEST:
         return {
            ...state,
            isProductFetching: true,
         }

      case INCREMENT_PRODUCT_QUANTITY_SUCCESS:
         return {
            ...state,
            isProductFetching: false,
            isIncrementProductQuantitySuccess: true,
            products: state.products.map((product) =>
               product.id === action.payload.product.id
                  ? action.payload.product
                  : product
            ),
         }

      case INCREMENT_PRODUCT_QUANTITY_FAILURE:
         return {
            ...state,
            isProductFetching: false,
            isIncrementProductQuantityError: true,
            errorIncrementProductQuantityMessage:
               action?.payload?.errorIncrementProductQuantityMessage,
         }

      default:
         return state
   }
}
