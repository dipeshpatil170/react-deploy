import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Image, Stack, Text } from '@chakra-ui/react'

interface Props {
   purchasedProduct: IProductPurchaseProduct
   handleRemovePurchasedProduct: Function
}

export const SinglePurchasedProduct = ({
   purchasedProduct,
   handleRemovePurchasedProduct,
}: Props) => {
   return (
      <>
         <Stack direction={['column', 'row']} spacing="24px">
            <Box>
               <Image
                  objectFit={'cover'}
                  src={purchasedProduct?.image}
                  rounded={'md'}
                  alt={purchasedProduct?.name}
                  w={'100%'}
                  h={'100%'}
               />
            </Box>
            <Box>
               <Text fontSize="1xl" marginTop="5%" pt={2}>
                  Name : {purchasedProduct?.name}
               </Text>
               <Text fontSize="1xl" pt={2}>
                  Price : {purchasedProduct?.price}
               </Text>
               <Text fontSize="1xl" pt={2}>
                  Quantity : {purchasedProduct?.quantity}
               </Text>
               <Button
                  w={'100%'}
                  mt={3}
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleRemovePurchasedProduct(purchasedProduct)}
               >
                  Remove <DeleteIcon marginLeft={2} w={3} h={3} />
               </Button>
            </Box>
         </Stack>
      </>
   )
}
