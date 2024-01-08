import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { LayoutContainer } from '../../styles/layoutContainer'
import { OrderContainer, OrderInfos, OrderDatailsContainer } from './styles'
import delivery from '../../assets/delivery.svg'
import { useContext, useEffect } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Success() {
  const { order, cleanCartContext } = useContext(OrderContext)

  function paymentType() {
    switch (order.paymentType) {
      case 'credit':
        return 'Cartão de credito'
      case 'debit':
        return 'Cartão de debito'
      case 'money':
        return 'Dinheiro'
      default:
        return ''
    }
  }

  useEffect(() => {
    cleanCartContext()
  }, [])

  return (
    <LayoutContainer>
      <OrderContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <OrderInfos>
          <OrderDatailsContainer>
            <li>
              <span className="mapPin">
                <MapPin size={16} weight="fill" />
              </span>{' '}
              <p>
                Entrega em{' '}
                <strong>
                  {order.street}, {order.number} {order.complement}
                </strong>
                <br />
                {order.district} - {order.city}, {order.state}
              </p>
            </li>
            <li>
              <span className="timer">
                <Timer size={16} weight="fill" />
              </span>{' '}
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </li>
            <li>
              <span className="currencyDollar">
                <CurrencyDollar size={16} weight="bold" />
              </span>{' '}
              <p>
                Pagamento na entrega
                <br />
                <strong>{paymentType()}</strong>
              </p>
            </li>
          </OrderDatailsContainer>

          <img src={delivery} alt="" />
        </OrderInfos>
      </OrderContainer>
    </LayoutContainer>
  )
}
