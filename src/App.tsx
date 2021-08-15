import {
   Center,
   Container,
   Flex,
   SimpleGrid,
   Stack,
   Text,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBalance } from './api/balanceApi'
import { fetchProducts } from './api/productsApi'
import { fetchPurchasedProducts } from './api/purchasedProductsApi'
import './App.css'
import { AddMoneyPannel } from './pages/addMoneyPannel'
import { Product } from './pages/product'
import { PurchasedProducts } from './pages/purchasedProducts'
import { Wallet } from './pages/wallet'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchProducts())
      dispatch(fetchBalance())
      dispatch(fetchPurchasedProducts())
   }, [dispatch])
   return (
      <Container maxW={'8xl'} py={10}>
         <Center>
            <Text
               textTransform={'uppercase'}
               color={'blue.400'}
               fontWeight={600}
               fontSize={'lg'}
               p={2}
               alignSelf={'flex-center'}
               rounded={'md'}
            >
               Vending Machine
            </Text>
         </Center>

         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <Stack spacing={4}>
               <Product />
            </Stack>
            <Flex>
               <Stack marginLeft={20} spacing={4}>
                  <Wallet />
                  <AddMoneyPannel />
                  <PurchasedProducts />
               </Stack>
            </Flex>
         </SimpleGrid>
      </Container>
   )
}

export default App
