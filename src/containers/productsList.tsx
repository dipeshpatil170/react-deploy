import { Box, Grid } from '@chakra-ui/react'
import PropTypes from 'prop-types' // ES6
import { SingleProduct } from './singleProduct'
interface Props {
   products: IProduct[]
   balance: Ibalance
   handleBuyProduct: Function
   isPurchasedProductsFetching: boolean
}

export const ProductsList = ({
   products,
   balance,
   handleBuyProduct,
   isPurchasedProductsFetching,
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
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
               {products &&
                  products.length > 0 &&
                  products.map((product) => {
                     return (
                        <SingleProduct
                           key={product?.id}
                           product={product}
                           balance={balance}
                           handleBuyProduct={handleBuyProduct}
                           isPurchasedProductsFetching={
                              isPurchasedProductsFetching
                           }
                        />
                     )
                  })}
            </Grid>
         </Box>
      </>
   )
}
ProductsList.propTypes = {
   products: PropTypes.array,
   balance: PropTypes.object,
   handleBuyProduct: PropTypes.func,
   isPurchasedProductsFetching: PropTypes.bool,
}
