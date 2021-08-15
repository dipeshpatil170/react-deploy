import { combineReducers } from 'redux'
import { balanceReducer } from './balanceReducer'
import { productReducer } from './productReducer'
import { purchasedProducts } from './purchasedProductsReducer'

const rootReducer = combineReducers({
   product: productReducer,
   balance: balanceReducer,
   purchasedProducts: purchasedProducts,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
