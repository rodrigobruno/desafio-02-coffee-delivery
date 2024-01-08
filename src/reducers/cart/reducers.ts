import { produce } from 'immer'
import { ActionTypes } from './actions'
import IProduct from '../../@types/IProduct'

interface CartState {
  cart: IProduct[]
}

type ActionProps = {
  type: ActionTypes
  payload?: {
    product: IProduct
  }
}
export function cartReducers(state: CartState, action: ActionProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      const productCardIndex = state.cart.findIndex((product) => {
        return product.id === action.payload!.product.id
      })

      if (productCardIndex >= 0) {
        return produce(state, (draft) => {
          draft.cart[productCardIndex].quantity =
            draft.cart[productCardIndex].quantity +
            action.payload!.product.quantity
        })
      }

      return produce(state, (draft) => {
        draft.cart.push(action.payload!.product as IProduct)
      })
    }
    case ActionTypes.REMOVE_PRODUCT: {
      const productCardIndex = state.cart.findIndex((product) => {
        return product.id === action.payload!.product.id
      })

      if (productCardIndex < 0) return state

      return produce(state, (draft) => {
        draft.cart.splice(productCardIndex, 1)
      })
    }
    case ActionTypes.INCREASE_QUANTITY_PRODUCT: {
      const productCardIndex = state.cart.findIndex((product) => {
        return product.id === action.payload!.product.id
      })

      return produce(state, (draft) => {
        draft.cart[productCardIndex].quantity =
          draft.cart[productCardIndex].quantity + 1
      })
    }
    case ActionTypes.DECREASE_QUANTITY_PRODUCT: {
      const productCardIndex = state.cart.findIndex((product) => {
        return product.id === action.payload!.product.id
      })

      if (state.cart[productCardIndex].quantity > 1) {
        return produce(state, (draft) => {
          draft.cart[productCardIndex].quantity =
            draft.cart[productCardIndex].quantity - 1
        })
      }

      return state
    }
    case ActionTypes.RESET_CART: {
      return produce(state, (draft) => {
        draft.cart = []
      })
    }
    default:
      return state
  }
}
