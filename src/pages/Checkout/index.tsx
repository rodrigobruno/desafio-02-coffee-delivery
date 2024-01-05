import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { LayoutContainer } from '../../styles/layoutContainer'
import { QuantityInput } from '../../components/QuantityInput'
import {
  CheckoutContainer,
  OrderAddressContainer,
  OrderAmountContainer,
  OrderPaymentContainer,
  PaymentType,
  PaymentTypeButton,
  AddressInputs,
  OrderItem,
} from './styles'

export function Checkout() {
  return (
    <LayoutContainer>
      <CheckoutContainer>
        <main>
          <h2>Complete seu pedido</h2>

          <form>
            <OrderAddressContainer>
              <legend>
                <MapPinLine size={22} />
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </legend>
              <AddressInputs>
                <input type="text" name="zipCode" placeholder="CEP" required />
                <input type="text" name="street" placeholder="Rua" required />
                <input
                  type="text"
                  name="number"
                  placeholder="Número"
                  required
                />
                <div className="complement">
                  <input
                    type="text"
                    name="complement"
                    placeholder="Complemento"
                  />
                  <span className="notRequired">Opcional</span>
                </div>
                <input
                  type="text"
                  name="district"
                  placeholder="Bairro"
                  required
                />
                <input type="text" name="city" placeholder="Cidade" required />
                <input type="text" name="state" placeholder="UF" required />
              </AddressInputs>
            </OrderAddressContainer>

            <OrderPaymentContainer>
              <legend>
                <CurrencyDollar size={22} />
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </legend>
              <PaymentType>
                <PaymentTypeButton value="credit">
                  <CreditCard size={16} />
                  Cartão de crédito
                </PaymentTypeButton>
                <PaymentTypeButton value="debit">
                  <Bank size={16} />
                  Cartão de débito
                </PaymentTypeButton>
                <PaymentTypeButton value="money">
                  <Money size={16} />
                  Dinheiro
                </PaymentTypeButton>
              </PaymentType>
            </OrderPaymentContainer>
          </form>
        </main>

        <aside>
          <h3>Cafés selecionados</h3>

          <OrderAmountContainer>
            <OrderItem>
              <img src="images/coffees/americano.png" alt="" />
              <span className="title">Expresso Tradicional</span>
              <span className="price">R$ 19,80</span>
              <div className="actions">
                <QuantityInput />
                <button>
                  <Trash size={16} />
                  Remover
                </button>
              </div>
            </OrderItem>

            <table>
              <tbody>
                <tr>
                  <td>Total de itens</td>
                  <td>R$ 29,70</td>
                </tr>
                <tr>
                  <td>Entrega</td>
                  <td>R$ 3,50</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>R$ 33,20</td>
                </tr>
              </tfoot>
            </table>
            <button type="submit">Confirmar pedido</button>
          </OrderAmountContainer>
        </aside>
      </CheckoutContainer>
    </LayoutContainer>
  )
}
