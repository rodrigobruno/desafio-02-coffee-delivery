import IProduct from '../../@types/IProduct'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  INCREASE_QUANTITY_PRODUCT = 'INCREASE_QUANTITY_PRODUCT',
  DECREASE_QUANTITY_PRODUCT = 'DECREASE_QUANTITY_PRODUCT',
  RESET_CART = 'RESET_CART',
}

export function addNewProductAction(product: IProduct) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProductAction(product: IProduct) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

export function increaseQuantityProductAction(product: IProduct) {
  return {
    type: ActionTypes.INCREASE_QUANTITY_PRODUCT,
    payload: {
      product,
    },
  }
}

export function decreaseQuantityProductAction(product: IProduct) {
  return {
    type: ActionTypes.DECREASE_QUANTITY_PRODUCT,
    payload: {
      product,
    },
  }
}

export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART,
  }
}
