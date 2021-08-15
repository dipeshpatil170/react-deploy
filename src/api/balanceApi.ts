import { api } from '.'
import {
   creditBalanceFailure,
   creditBalanceRequest,
   creditBalanceSuccess,
   debitBalanceFailure,
   debitBalanceRequest,
   debitBalanceSuccess,
   fetchBalanceFailure,
   fetchBalanceRequest,
   fetchBalanceSuccess,
} from './../store/actions/balanceAction'
export const fetchBalance = () => {
   return (dispatch: any) => {
      dispatch(fetchBalanceRequest())
      setTimeout(async () => {
         await api
            .get('/balance')
            .then((response) => dispatch(fetchBalanceSuccess(response?.data)))
            .catch((error) => dispatch(fetchBalanceFailure(error)))
      }, 100)
   }
}
export const creditBalance = (balanceTobeCredit: number) => {
   return async (dispatch: any) => {
      const { data } = await api.get('/balance')
      const newBalanceTobeCredit = data.amount + balanceTobeCredit
      dispatch(creditBalanceRequest())
      setTimeout(async () => {
         await api
            .patch('/balance', { amount: newBalanceTobeCredit })
            .then((response) => dispatch(creditBalanceSuccess(response?.data)))
            .catch((error) => dispatch(creditBalanceFailure(error)))
      }, 1000)
   }
}
export const debitBalance = (balanceTobeDebit: number) => {
   return async (dispatch: any) => {
      dispatch(debitBalanceRequest())
      await api
         .patch('/balance', { amount: balanceTobeDebit })
         .then((response) => dispatch(debitBalanceSuccess(response?.data)))
         .catch((error) => dispatch(debitBalanceFailure(error)))
   }
}
