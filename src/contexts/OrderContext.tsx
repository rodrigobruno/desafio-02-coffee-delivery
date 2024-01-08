import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from 'react'
import IProduct from '../@types/IProduct'
import IOrder from '../@types/IOrder'
import { cartReducers } from '../reducers/cart/reducers'
import {
  addNewProductAction,
  decreaseQuantityProductAction,
  increaseQuantityProductAction,
  removeProductAction,
  resetCartAction,
} from '../reducers/cart/actions'
import { orderReducers } from '../reducers/order/reducers'
import { addNewOrderAction, resetOrderAction } from '../reducers/order/actions'

interface OrderContextType {
  cart: IProduct[]
  order: IOrder
  addNewProdutcToCart: (data: IProduct) => void
  removeProdutcFromCart: (data: IProduct) => void
  increaseQuantityProduct: (data: IProduct) => void
  decreaseQuantityProduct: (data: IProduct) => void
  cleanCartContext: () => void
  addNewOrder: (data: IOrder) => void
  cleanOrderContext: () => void
}

interface OrderProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderProvider({ children }: OrderProviderProps) {
  const [cartState, cartDispatch] = useReducer(
    cartReducers,
    { cart: [] },
    (initialState) => {
      const storedStateJSON = localStorage.getItem(
        '@coffeeDelivery:cart-state-1.0.0',
      )

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }

      return initialState
    },
  )

  const [orderState, orderDispatch] = useReducer(
    orderReducers,
    { order: {} },
    (initialState) => {
      const storedStateJSON = localStorage.getItem(
        '@coffeeDelivery:order-state-1.0.0',
      )

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }

      return initialState
    },
  )

  const { cart } = cartState
  const { order } = orderState

  useEffect(() => {
    const cartStateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffeeDelivery:cart-state-1.0.0', cartStateJSON)

    const orderStateJSON = JSON.stringify(orderState)
    localStorage.setItem('@coffeeDelivery:order-state-1.0.0', orderStateJSON)
  }, [cartState, orderState])

  const addNewProdutcToCart = useCallback((data: IProduct) => {
    cartDispatch(addNewProductAction(data))
  }, [])

  const removeProdutcFromCart = useCallback((data: IProduct) => {
    cartDispatch(removeProductAction(data))
  }, [])

  const increaseQuantityProduct = useCallback((data: IProduct) => {
    cartDispatch(increaseQuantityProductAction(data))
  }, [])

  const decreaseQuantityProduct = useCallback((data: IProduct) => {
    cartDispatch(decreaseQuantityProductAction(data))
  }, [])

  const cleanCartContext = useCallback(() => {
    cartDispatch(resetCartAction())
  }, [])

  const addNewOrder = useCallback((data: IOrder) => {
    orderDispatch(addNewOrderAction(data))
  }, [])

  const cleanOrderContext = useCallback(() => {
    orderDispatch(resetOrderAction())
  }, [])

  return (
    <OrderContext.Provider
      value={{
        cart,
        order,
        addNewProdutcToCart,
        removeProdutcFromCart,
        increaseQuantityProduct,
        decreaseQuantityProduct,
        cleanCartContext,
        addNewOrder,
        cleanOrderContext,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
