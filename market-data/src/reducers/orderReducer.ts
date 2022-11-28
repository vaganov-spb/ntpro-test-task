import { IOrder, data } from '../pages/ArchivePage/ArchiveData'
import { addOrderType } from '../actions/actionTypes'
import { IAddOrderAction } from '../actions/ordersActions'
import { v4 as uuidv4 } from 'uuid'

const initialState: IOrder[] = data

export default (state = initialState, action: IAddOrderAction) => {
  switch (action.type) {
    case addOrderType:
      return [
        ...data,
        {
          key: uuidv4(),
          ...action.payload,
        },
      ]
    default:
      return state
  }
}
