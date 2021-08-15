import {
   DEBIT_BALANCE_FAILURE,
   DEBIT_BALANCE_REQUEST,
   DEBIT_BALANCE_SUCCESS,
   FETCH_BALANCE_FAILURE,
   FETCH_BALANCE_REQUEST,
   FETCH_BALANCE_SUCCESS,
} from '../../types/Types'
import {
   CREDIT_BALANCE_FAILURE,
   CREDIT_BALANCE_REQUEST,
   CREDIT_BALANCE_SUCCESS,
} from './../../types/Types'

export const fetchBalanceRequest = () => {
   return {
      type: FETCH_BALANCE_REQUEST,
   }
}

export const fetchBalanceSuccess = (balance: Ibalance) => {
   return {
      type: FETCH_BALANCE_SUCCESS,
      payload: { balance: balance },
   }
}

export const fetchBalanceFailure = (e: Error) => {
   return {
      type: FETCH_BALANCE_FAILURE,
      payload: {
         errorBalanceFetchMessage: e?.message || 'Internal Server Error',
      },
   }
}
export const creditBalanceRequest = () => {
   return {
      type: CREDIT_BALANCE_REQUEST,
   }
}

export const creditBalanceSuccess = (balance: Ibalance) => {
   return {
      type: CREDIT_BALANCE_SUCCESS,
      payload: { balance: balance },
   }
}

export const creditBalanceFailure = (e: Error) => {
   return {
      type: CREDIT_BALANCE_FAILURE,
      payload: {
         errorCreditBalanceMessage: e?.message || 'Internal Server Error',
      },
   }
}
export const debitBalanceRequest = () => {
   return {
      type: DEBIT_BALANCE_REQUEST,
   }
}

export const debitBalanceSuccess = (balance: Ibalance) => {
   return {
      type: DEBIT_BALANCE_SUCCESS,
      payload: { balance: balance },
   }
}

export const debitBalanceFailure = (e: Error) => {
   return {
      type: DEBIT_BALANCE_FAILURE,
      payload: {
         errorDebitBalanceMessage: e?.message || 'Internal Server Error',
      },
   }
}
