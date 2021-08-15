import {
   ADD_PRODUCT_FAILURE,
   ADD_PRODUCT_REQUEST,
   ADD_PRODUCT_SUCCESS,
   FETCH_PURCHASEDPRODUCTS_FAILURE,
   FETCH_PURCHASEDPRODUCTS_REQUEST,
   FETCH_PURCHASEDPRODUCTS_SUCCESS,
   REMOVE_PRODUCT_FAILURE,
   REMOVE_PRODUCT_REQUEST,
   REMOVE_PRODUCT_SUCCESS,
} from './../../types/Types'

const initialState: PurchasedProductsState = {
   purchasedProducts: [],
   purchasedProduct: {
      id: 0,
      name: '',
      price: 0,
      quantity: 0,
      image: null,
      productId: 0,
   },
   isPurchasedProductsFetching: false,
   isPurchasedProductsFetchSuccess: false,
   isPurchasedProductsFetchError: false,
   errorPurchasedProductsFetchMessage: '',
   isAddPurchasedProductSuccess: false,
   isAddPurchasedProductError: false,
   errorAddPurchasedProductsMessage: '',
   isRemovePurchasedProductSuccess: false,
   isRemovePurchasedProductError: false,
   errorRemovePurchasedProductsMessage: '',
}

export const purchasedProducts = (
   state = initialState,
   action: PurchasedProductsAction
): PurchasedProductsState => {
   switch (action?.type) {
      case FETCH_PURCHASEDPRODUCTS_REQUEST:
         return {
            ...state,
            isPurchasedProductsFetching: true,
         }

      case FETCH_PURCHASEDPRODUCTS_SUCCESS:
         return {
            ...state,
            isPurchasedProductsFetching: false,
            isPurchasedProductsFetchSuccess: true,
            purchasedProducts: action?.payload?.purchasedProducts,
         }

      case FETCH_PURCHASEDPRODUCTS_FAILURE:
         return {
            ...state,
            isPurchasedProductsFetching: false,
            isPurchasedProductsFetchError: true,
            errorPurchasedProductsFetchMessage:
               action?.payload?.errorPurchasedProductsFetchMessage,
         }
      case ADD_PRODUCT_REQUEST: {
         return {
            ...state,
            isPurchasedProductsFetching: true,
            isAddPurchasedProductSuccess: false,
            isAddPurchasedProductError: false,
         }
      }
      case ADD_PRODUCT_SUCCESS: {
         return {
            ...state,
            isPurchasedProductsFetching: false,
            isAddPurchasedProductSuccess: true,
            purchasedProducts: state.purchasedProducts.concat(
               action?.payload?.purchasedProducts
            ),
         }
      }
      case ADD_PRODUCT_FAILURE:
         return {
            ...state,
            isPurchasedProductsFetching: false,
            isAddPurchasedProductError: true,
            errorAddPurchasedProductsMessage:
               action?.payload?.errorAddPurchasedProductsMessage,
         }

      case REMOVE_PRODUCT_REQUEST: {
         return {
            ...state,
            isPurchasedProductsFetching: true,
            isRemovePurchasedProductSuccess: false,
            isRemovePurchasedProductError: false,
         }
      }
      case REMOVE_PRODUCT_SUCCESS: {
         return {
            ...state,
            isPurchasedProductsFetching: false,
            isRemovePurchasedProductSuccess: true,
            purchasedProducts: state.purchasedProducts.filter(
               (purchasedProduct) =>
                  purchasedProduct.id !== action.payload.purchasedProduct.id
            ),
         }
      }
      case REMOVE_PRODUCT_FAILURE:
         return {
            ...state,
            isPurchasedProductsFetching: false,
            isRemovePurchasedProductError: true,
            errorRemovePurchasedProductsMessage:
               action?.payload?.errorRemovePurchasedProductsMessage,
         }

      default:
         return state
   }
}
