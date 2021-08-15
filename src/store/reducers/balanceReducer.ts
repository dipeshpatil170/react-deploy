import {
   CREDIT_BALANCE_FAILURE,
   CREDIT_BALANCE_REQUEST,
   CREDIT_BALANCE_SUCCESS,
   DEBIT_BALANCE_FAILURE,
   DEBIT_BALANCE_REQUEST,
   DEBIT_BALANCE_SUCCESS,
   FETCH_BALANCE_FAILURE,
   FETCH_BALANCE_REQUEST,
   FETCH_BALANCE_SUCCESS,
} from './../../types/Types'

const initialState: BalanceState = {
   balance: { amount: 0 },
   isBalanceFetching: false,
   isBalanceFetchSuccess: false,
   isBalanceFetchError: false,
   errorBalanceFetchMessage: '',
   isCreditBalanceSuccess: false,
   isCreditBalanceError: false,
   errorCreditBalanceMessage: '',
   isDebitBalanceSuccess: false,
   isDebitBalanceError: false,
   errorDebitBalanceMessage: '',
}

export const balanceReducer = (
   state = initialState,
   action: BalanceAction
): BalanceState => {
   switch (action?.type) {
      case FETCH_BALANCE_REQUEST:
         return {
            ...state,
            isBalanceFetching: true,
         }

      case FETCH_BALANCE_SUCCESS:
         return {
            ...state,
            isBalanceFetching: false,
            isBalanceFetchSuccess: true,
            balance: action?.payload?.balance,
         }

      case FETCH_BALANCE_FAILURE:
         return {
            ...state,
            isBalanceFetching: false,
            isBalanceFetchError: true,
            errorBalanceFetchMessage: action?.payload?.errorBalanceFetchMessage,
         }

      case CREDIT_BALANCE_REQUEST:
         return {
            ...state,
            isBalanceFetching: true,
            isCreditBalanceSuccess: false,
            isCreditBalanceError: false,
         }

      case CREDIT_BALANCE_SUCCESS:
         return {
            ...state,
            isBalanceFetching: false,
            isCreditBalanceSuccess: true,
            balance: action?.payload?.balance,
         }

      case CREDIT_BALANCE_FAILURE:
         return {
            ...state,
            isBalanceFetching: false,
            isCreditBalanceError: true,
            errorCreditBalanceMessage:
               action?.payload?.errorCreditBalanceMessage,
         }

      case DEBIT_BALANCE_REQUEST:
         return {
            ...state,
            isBalanceFetching: true,
            isDebitBalanceSuccess: false,
            isDebitBalanceError: false,
         }

      case DEBIT_BALANCE_SUCCESS:
         return {
            ...state,
            isBalanceFetching: false,
            isDebitBalanceSuccess: true,
            balance: action?.payload?.balance,
         }

      case DEBIT_BALANCE_FAILURE:
         return {
            ...state,
            isBalanceFetching: false,
            isDebitBalanceError: true,
            errorDebitBalanceMessage: action?.payload?.errorDebitBalanceMessage,
         }

      default:
         return state
   }
}
