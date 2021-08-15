interface IProduct {
   name: string
   price: number
   quantity: number
   image: any
   id: number
}
type ProductState = {
   products: IProduct[]
   product: IProduct
   isProductFetching: boolean
   isProductFetchSuccess: boolean
   isProductFetchError: boolean
   errorProductFetchMessage: string
   isDecrementProductQuantitySuccess: boolean
   isDecrementProductQuantityError: boolean
   errorDecrementProductQuantityMessage: string
   isIncrementProductQuantitySuccess: boolean
   isIncrementProductQuantityError: boolean
   errorIncrementProductQuantityMessage: string
}
type ProductAction = {
   type: string
   payload: ProductState
}
interface Ibalance {
   amount: number
}

type BalanceState = {
   balance: Ibalance
   isBalanceFetching: boolean
   isBalanceFetchSuccess: boolean
   isBalanceFetchError: boolean
   errorBalanceFetchMessage: string
   isCreditBalanceSuccess: boolean
   isCreditBalanceError: boolean
   errorCreditBalanceMessage: string
   isDebitBalanceSuccess: boolean
   isDebitBalanceError: boolean
   errorDebitBalanceMessage: string
}

type BalanceAction = {
   type: string
   payload: BalanceState
}

type PurchasedProductsState = {
   purchasedProducts: IProductPurchaseProduct[]
   purchasedProduct: IProductPurchaseProduct
   isPurchasedProductsFetching: boolean
   isPurchasedProductsFetchSuccess: boolean
   isPurchasedProductsFetchError: boolean
   errorPurchasedProductsFetchMessage: string
   isAddPurchasedProductSuccess: boolean
   isAddPurchasedProductError: boolean
   errorAddPurchasedProductsMessage: string
   isRemovePurchasedProductSuccess: boolean
   isRemovePurchasedProductError: boolean
   errorRemovePurchasedProductsMessage: string
}

type PurchasedProductsAction = {
   type: string
   payload: PurchasedProductsState
}
interface IProductPurchase {
   productId: number
   name: string
   price: number
   quantity: number
   image: any
}
interface IProductPurchaseProduct {
   id: number
   name: string
   price: number
   quantity: number
   image: any
   productId: number
}
