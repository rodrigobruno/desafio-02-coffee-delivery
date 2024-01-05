import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { LayoutContainer } from '../../styles/layoutContainer'
import { OrderContainer, OrderInfos, OrderDatailsContainer } from './styles'
import delivery from '../../assets/delivery.svg'

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
              </p>
            </li>
          </OrderDatailsContainer>

          <img src={delivery} alt="" />
        </OrderInfos>
      </OrderContainer>
    </LayoutContainer>
  )
}
