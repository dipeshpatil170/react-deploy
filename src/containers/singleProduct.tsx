import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types' // ES6

interface Props {
   product: IProduct
   balance: Ibalance
   handleBuyProduct: Function
   isPurchasedProductsFetching: boolean
}

export const SingleProduct = ({
   product,
   balance,
   handleBuyProduct,
   isPurchasedProductsFetching,
}: Props) => {
   return (
      <Box padding="6" boxShadow="lg" bg="gray.200">
         <Image
            rounded={'md'}
            objectFit={'cover'}
            src={product?.image}
            alt={product?.name}
            w={'100%'}
         />
         <Text fontSize="1xl" marginTop="5%" pt={2}>
            Name : {product?.name}
         </Text>
         <Text fontSize="1xl" pt={2}>
            Price : {product?.price}
         </Text>

         {product?.quantity === 0 && (
            <Text color="red" fontSize="1xl" pt={2}>
               Out of stock
            </Text>
         )}
         {product?.quantity > 0 && (
            <>
               <Text fontSize="1xl" pt={2}>
                  Quantity : {product?.quantity}
               </Text>
               <Button
                  onClick={() => handleBuyProduct(product)}
                  w={'100%'}
                  mt={3}
                  colorScheme="teal"
                  size="md"
                  disabled={
                     !(Number(balance?.amount) >= Number(product?.price)) ||
                     isPurchasedProductsFetching
                  }
               >
                  Buy <AddIcon marginLeft={2} w={3} h={3} />
               </Button>
            </>
         )}
      </Box>
   )
}
SingleProduct.propTypes = {
   product: PropTypes.object,
   balance: PropTypes.object,
   handleBuyProduct: PropTypes.func,
   isPurchasedProductsFetching: PropTypes.bool,
}
