import { produce } from 'immer'
import IOrder from '../../@types/IOrder'
import { ActionTypes } from '../order/actions'

interface OrderState {
  order: IOrder
}

type ActionProps = {
  type: ActionTypes
  payload?: {
    order: IOrder
  }
}
export function orderReducers(state: OrderState, action: ActionProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ORDER: {
      return produce(state, (draft) => {
        draft.order = action.payload!.order
      })
    }
    case ActionTypes.RESET_ORDER: {
      return produce(state, (draft) => {
        draft.order = {} as IOrder
      })
    }
    default:
      return state
  }
}
