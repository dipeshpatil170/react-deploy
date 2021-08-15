import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { creditBalance } from '../api/balanceApi'

export const AddMoneyPannel = () => {
   const dispatch = useDispatch()
   const moneyOption = [10, 20, 30, 40, 50, 100, 500]

   return (
      <>
         <Box bg="gray" w="100%" p={3} color="white">
            <Stack spacing={3}>
               <Text fontSize="1xl">Add Money </Text>
            </Stack>
         </Box>
         <Box w="100%" p={4} boxShadow="lg" bg="gray.200" rounded={'md'}>
            <Stack spacing={4} direction="row" align="center">
               {moneyOption.map((money, index) => {
                  return (
                     <Button
                        key={index}
                        onClick={() => dispatch(creditBalance(money))}
                        colorScheme="pink"
                        size="sm"
                     >
                        ₹ {money}
                     </Button>
                  )
               })}
            </Stack>
         </Box>
      </>
   )
}
