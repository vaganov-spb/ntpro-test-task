import { IOrder } from '../pages/ArchivePage/ArchiveData'
import { addOrderType } from './actionTypes'

export type addOrderPayload = Omit<IOrder, 'key'>

export interface IAddOrderAction {
  payload: addOrderPayload
  type: string
}

export const addOrder = (payload: addOrderPayload): IAddOrderAction => ({
  type: addOrderType,
  payload,
})
