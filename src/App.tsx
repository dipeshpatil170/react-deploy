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
   const products = [
      {
         "name": "Salad",
         "price": 10,
         "quantity": 10,
         "image": "http://lorempixel.com/160/160/food/5/",
         "id": 1
       },
       {
         "name": "Ice Apples",
         "price": 20,
         "quantity": 10,
         "image": "http://lorempixel.com/160/160/food/7/",
         "id": 2
       },
       {
         "name": "Sweets",
         "price": 30,
         "quantity": 10,
         "image": "http://lorempixel.com/160/160/food/8/",
         "id": 3
       },
       {
         "name": "Sandwich",
         "price": 40,
         "quantity": 10,
         "image": "http://lorempixel.com/160/160/food/9/",
         "id": 4
       }
   ]
   const balance = {
      "amount": 10
    }
   const purchasedproducts = [
      {
      "productId":1,
      "name": "Sandwich",
      "price": 40,
      "quantity": 10,
      "image": "http://lorempixel.com/160/160/food/9/",
      "id": 4
   }
   ]
   localStorage.setItem('products',JSON.stringify(products))
   localStorage.setItem('balance',JSON.stringify(balance))
   localStorage.setItem('purchasedproducts',JSON.stringify(purchasedproducts))
 

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
