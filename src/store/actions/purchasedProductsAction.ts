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
} from '../../types/Types'

export const fetchPurchasedProductsRequest = () => {
   return {
      type: FETCH_PURCHASEDPRODUCTS_REQUEST,
   }
}

export const fetchPurchasedProductsSuccess = (
   purchasedProducts: IProductPurchaseProduct[]
) => {
   return {
      type: FETCH_PURCHASEDPRODUCTS_SUCCESS,
      payload: { purchasedProducts: purchasedProducts },
   }
}

export const fetchPurchasedProductsFailure = (e: Error) => {
   return {
      type: FETCH_PURCHASEDPRODUCTS_FAILURE,
      payload: {
         errorPurchasedProductsFetchMessage:
            e?.message || 'Internal Server Error',
      },
   }
}

export const addProductRequest = () => {
   return {
      type: ADD_PRODUCT_REQUEST,
   }
}

export const addProductSuccess = (
   purchasedProduct: IProductPurchaseProduct
) => {
   return {
      type: ADD_PRODUCT_SUCCESS,
      payload: {
         purchasedProducts: purchasedProduct,
      },
   }
}
export const addProductFailure = (e: Error) => {
   return {
      type: ADD_PRODUCT_FAILURE,
      payload: {
         errorPurchasedProductsFetchMessage:
            e?.message || 'Internal Server Error',
      },
   }
}
export const removeProductRequest = () => {
   return {
      type: REMOVE_PRODUCT_REQUEST,
   }
}

export const removeProductSuccess = (
   purchasedProduct: IProductPurchaseProduct
) => {
   return {
      type: REMOVE_PRODUCT_SUCCESS,
      payload: {
         purchasedProduct: purchasedProduct,
      },
   }
}
export const removeProductFailure = (e: Error) => {
   return {
      type: REMOVE_PRODUCT_FAILURE,
      payload: {
         errorRemovePurchasedProductsMessage:
            e?.message || 'Internal Server Error',
      },
   }
}
