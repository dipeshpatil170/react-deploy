import { Box, Skeleton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../api/purchasedProductsApi'
import { AlertMessage } from '../components/AlertMessage'
import { ToastNotification } from '../components/ToastNotification'
import { PurchasedProductList } from '../containers/purchasedProductList'
import { RootState } from '../store/reducers'

export const PurchasedProducts = () => {
   const dispatch = useDispatch()
   const {
      purchasedProducts,
      isPurchasedProductsFetching,
      isPurchasedProductsFetchError,
      errorPurchasedProductsFetchMessage,
      isAddPurchasedProductSuccess,
      isAddPurchasedProductError,
      errorAddPurchasedProductsMessage,
      isRemovePurchasedProductSuccess,
      isRemovePurchasedProductError,
      errorRemovePurchasedProductsMessage,
   } = useSelector((state: RootState) => {
      return state.purchasedProducts
   })

   const handleRemovePurchasedProduct = (
      purchasedProduct: IProductPurchaseProduct
   ) => {
      dispatch(removeProduct(purchasedProduct))
   }

   return (
      <>
         {purchasedProducts && purchasedProducts.length > 0 && (
            <>
               <Box bg="gray" w="100%" p={3} color="white">
                  <Stack spacing={3}>
                     <Text fontSize="1xl">Purchased Products</Text>
                  </Stack>
               </Box>
               <PurchasedProductList
                  purchasedProducts={purchasedProducts}
                  handleRemovePurchasedProduct={handleRemovePurchasedProduct}
               />
            </>
         )}

         {isPurchasedProductsFetchError && (
            <AlertMessage
               status="error"
               title="Some Error Occured"
               description={errorPurchasedProductsFetchMessage}
            />
         )}
         {isPurchasedProductsFetching && (
            <Stack>
               <Skeleton height="20px" />
               <Skeleton height="20px" />
               <Skeleton height="20px" />
            </Stack>
         )}

         {isAddPurchasedProductSuccess && (
            <ToastNotification
               title="Buy Product success!"
               description="You can see product in product purchase list."
               status="success"
            />
         )}
         {isRemovePurchasedProductSuccess && (
            <ToastNotification
               title="Remove Product success!"
               description="Product has been removed from purchase list, amount shall be credited soon to your wallet."
               status="success"
            />
         )}
         {isAddPurchasedProductError && (
            <ToastNotification
               title="Buy product failed !"
               description={errorAddPurchasedProductsMessage}
               status="error"
            />
         )}
         {isRemovePurchasedProductError && (
            <ToastNotification
               title="Remove product failed !"
               description={errorRemovePurchasedProductsMessage}
               status="error"
            />
         )}
      </>
   )
}
