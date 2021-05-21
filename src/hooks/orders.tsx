import { useContext, createContext, useCallback, useState } from 'react'
import Cookie from 'js-cookie'

import { useBag } from '@/hooks/bag'

import api from '@/services/api'

import { IOrderDTO } from '@/dtos/IOrderDTO'

interface IOrders {
  orders: IOrderDTO[]
}

interface OrdersContextData {
  addOrder(order: IOrderDTO): void
  orders: IOrderDTO[]
}

export const OrdersContext = createContext<OrdersContextData>(
  {} as OrdersContextData
)

export const OrdersProvider: React.FC = ({ children }) => {
  const { clearBag } = useBag()

  const [data, setData] = useState<IOrders>(() => {
    const orders = Cookie.get('orders')

    if (orders) {
      return { orders: JSON.parse(orders) }
    }

    return {} as IOrders
  })

  const addOrder = useCallback(async (order: IOrderDTO) => {
    const res = await api.post('/orders', order)

    console.log(res.data)
    clearBag()
  }, [])

  return (
    <OrdersContext.Provider
      value={{
        addOrder,
        orders: data.orders
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

export function useOrders(): OrdersContextData {
  const context = useContext(OrdersContext)

  if (!context) {
    throw new Error('useOrders must be used within an OrdersProvider')
  }
  return context
}
