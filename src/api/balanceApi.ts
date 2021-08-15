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
         var balance = JSON.parse(localStorage.balance);
         dispatch(fetchBalanceSuccess(balance))
      }, 100)
   }
}
export const creditBalance = (balanceTobeCredit: number) => {
   return async (dispatch: any) => {
      var balance = JSON.parse(localStorage.balance).amount;
      localStorage.setItem('balance',JSON.stringify({amount:balance+balanceTobeCredit}))
      dispatch(creditBalanceRequest())
      setTimeout(async () => {
         dispatch(creditBalanceSuccess({amount:balance+balanceTobeCredit}))
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
