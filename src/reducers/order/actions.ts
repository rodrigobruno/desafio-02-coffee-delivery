import IOrder from '../../@types/IOrder'

export enum ActionTypes {
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
  RESET_ORDER = 'RESET_ORDER',
}

export function addNewOrderAction(order: IOrder) {
  return {
    type: ActionTypes.ADD_NEW_ORDER,
    payload: {
      order,
    },
  }
}

export function resetOrderAction() {
  return {
    type: ActionTypes.RESET_ORDER,
  }
}
