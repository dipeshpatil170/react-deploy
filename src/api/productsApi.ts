import { api } from '.'
import {
   decrementProductQuantityFailure,
   decrementProductQuantityRequest,
   decrementProductQuantitySuccess,
   fetchProductsFailure,
   fetchProductsSuccess,
   incrementProductQuantityFailure,
   incrementProductQuantityRequest,
   incrementProductQuantitySuccess,
} from '../store/actions/productAction'
import { fetchProductsRequest } from './../store/actions/productAction'

export const fetchProducts = () => {
   return (dispatch: any) => {
      dispatch(fetchProductsRequest())
      setTimeout(async () => {
         await api
            .get('/products')
            .then((response) => dispatch(fetchProductsSuccess(response?.data)))
            .catch((error) => dispatch(fetchProductsFailure(error)))
      }, 1000)
   }
}
export const decrementProductQuantity = (id: number, quantity: number) => {
   return async (dispatch: any) => {
      dispatch(decrementProductQuantityRequest())
      await api
         .patch(`/products/${id}`, { quantity: quantity })
         .then((response) =>
            dispatch(decrementProductQuantitySuccess(response?.data))
         )
         .catch((error) => dispatch(decrementProductQuantityFailure(error)))
   }
}
export const incrementProductQuantity = (id: number, quantity: number) => {
   return async (dispatch: any) => {
      dispatch(incrementProductQuantityRequest())
      const { data } = await api.get(`/products/${id}`)
      const incrementedQuantity = data.quantity + quantity
      await api
         .patch(`/products/${id}`, { quantity: incrementedQuantity })
         .then((response) =>
            dispatch(incrementProductQuantitySuccess(response?.data))
         )
         .catch((error) => dispatch(incrementProductQuantityFailure(error)))
   }
}
