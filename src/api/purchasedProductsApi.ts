import { api } from '.'
import {
   addProductFailure,
   addProductRequest,
   addProductSuccess,
   fetchPurchasedProductsFailure,
   fetchPurchasedProductsRequest,
   fetchPurchasedProductsSuccess,
   removeProductFailure,
   removeProductRequest,
   removeProductSuccess,
} from '../store/actions/purchasedProductsAction'
import { creditBalance, debitBalance } from './balanceApi'
import {
   decrementProductQuantity,
   incrementProductQuantity,
} from './productsApi'

export const fetchPurchasedProducts = () => {
   return (dispatch: any) => {
      dispatch(fetchPurchasedProductsRequest())
      setTimeout(async () => {
         var purchasedproducts = JSON.parse(localStorage.purchasedproducts);
         dispatch(fetchPurchasedProductsSuccess(purchasedproducts))
      }, 1000)
   }
}
export const addProduct = (product: IProduct, balance: Ibalance) => {
  
   return (dispatch: any) => {
      dispatch(addProductRequest())
      setTimeout(async () => {
         var productslist = JSON.parse(localStorage.products);
         let productTobePurchase: IProductPurchaseProduct = {
            id:productslist.length,
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image,
         }
         const newPurchasedproduct = [...productslist,productTobePurchase]
         localStorage.setItem('purchasedproducts',JSON.stringify(newPurchasedproduct))
       
         dispatch(addProductSuccess(productTobePurchase))

         // await dispatch(
         //    decrementProductQuantity(product.id, product.quantity - 1)
         // )
         // await dispatch(debitBalance(balance.amount - product.price))
      }, 1000)
   }
}

export const removeProduct = (purchaseProduct: IProductPurchaseProduct) => {
   return (dispatch: any) => {
      dispatch(removeProductRequest())
      setTimeout(async () => {
         await api
            .delete(`/purchasedproducts/${purchaseProduct.id}`)
            .then(() => dispatch(removeProductSuccess(purchaseProduct)))
            .catch((error) => dispatch(removeProductFailure(error)))
         await dispatch(
            incrementProductQuantity(
               purchaseProduct.productId,
               purchaseProduct.quantity
            )
         )
         await dispatch(creditBalance(purchaseProduct.price))
      }, 1000)
   }
}
