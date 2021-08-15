import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const logger = createLogger({})

export default function configureAppStore(preloadedState: any) {
   const store = configureStore({
      reducer: rootReducer,
      middleware: [logger, ...getDefaultMiddleware({ thunk: true }), thunk],
      preloadedState,
      enhancers: [],
   })

   return store
}
