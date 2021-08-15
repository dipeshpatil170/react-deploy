import { Box, StackDivider, VStack } from '@chakra-ui/react'
import PropTypes from 'prop-types' // ES6
import { SinglePurchasedProduct } from './singlePurchasedProduct'

interface Props {
   purchasedProducts: IProductPurchaseProduct[]
   handleRemovePurchasedProduct: Function
}

export const PurchasedProductList = ({
   purchasedProducts,
   handleRemovePurchasedProduct,
}: Props) => {
   return (
      <>
         <Box
            border="1px solid #eeeee4"
            padding="1rem"
            bg="white"
            w="100%"
            color="black"
            rounded={'md'}
         >
            <VStack
               divider={<StackDivider borderColor="gray.200" />}
               spacing={4}
               align="stretch"
            >
               {purchasedProducts &&
                  purchasedProducts.length > 0 &&
                  purchasedProducts.map((purchasedProduct) => {
                     return (
                        <SinglePurchasedProduct
                           key={purchasedProduct?.id}
                           purchasedProduct={purchasedProduct}
                           handleRemovePurchasedProduct={
                              handleRemovePurchasedProduct
                           }
                        />
                     )
                  })}
            </VStack>
         </Box>
      </>
   )
}
PurchasedProductList.propTypes = {
   purchasedProducts: PropTypes.array,
   handleRemovePurchasedProduct: PropTypes.func,
}
