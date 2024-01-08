import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import * as z from 'zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { LayoutContainer } from '../../styles/layoutContainer'
import {
  CheckoutContainer,
  OrderAddressContainer,
  OrderAmountContainer,
  OrderPaymentContainer,
  PaymentType,
  PaymentTypeButton,
  AddressInputs,
} from './styles'
import { OrderContext } from '../../contexts/OrderContext'
import OrderItem from './components/OrderItem'
import { priceFormatter } from '../../utils/formatter'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newOrderFormSchema = z.object({
  zipCode: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string().optional(),
  district: z.string(),
  city: z.string(),
  state: z.string().min(2).max(2),
  paymentType: z.enum(['credit', 'debit', 'money']),
})

type NewOrderFormInputs = z.infer<typeof newOrderFormSchema>

export function Checkout() {
  const { cart, order, addNewOrder } = useContext(OrderContext)
  const isCartEmpty = cart.length < 1

  const sumProductTotal = () => {
    const productTotal = cart.reduce(
      (acc, cur) => (acc += cur.price * cur.quantity),
      0,
    )
    return productTotal
  }

  const shipping = 3.5
  const productTotal = sumProductTotal()
  const totalOrder = shipping + productTotal

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewOrderFormInputs>({
    defaultValues: {
      zipCode: order.zipCode ?? '',
      street: order.street ?? '',
      number: order.number ?? '',
      complement: order.complement ?? '',
      district: order.district ?? '',
      city: order.city ?? '',
      state: order.state ?? '',
    },
    resolver: zodResolver(newOrderFormSchema),
  })

  const navigate = useNavigate()

  function handleCreateNewOrder(data: NewOrderFormInputs) {
    addNewOrder(data)
    reset()
    navigate('/success')
  }

  return (
    <LayoutContainer>
      <CheckoutContainer>
        <main>
          <h2>Complete seu pedido</h2>
          <form id="checkoutForm" onSubmit={handleSubmit(handleCreateNewOrder)}>
            <OrderAddressContainer>
              <legend>
                <MapPinLine size={22} />
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </legend>
              <AddressInputs>
                <input
                  type="text"
                  placeholder="CEP"
                  required
                  {...register('zipCode')}
                />
                <input
                  type="text"
                  placeholder="Rua"
                  required
                  {...register('street')}
                />
                <input
                  type="text"
                  placeholder="Número"
                  required
                  {...register('number')}
                />
                <div className="complement">
                  <input
                    type="text"
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                  <span className="notRequired">Opcional</span>
                </div>
                <input
                  type="text"
                  placeholder="Bairro"
                  required
                  {...register('district')}
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  required
                  {...register('city')}
                />
                <input
                  type="text"
                  placeholder="UF"
                  required
                  {...register('state')}
                />
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

              <Controller
                control={control}
                name="paymentType"
                render={({ field }) => {
                  return (
                    <PaymentType
                      onValueChange={field.onChange}
                      value={field.value}
                    >
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
                  )
                }}
              />
            </OrderPaymentContainer>
          </form>
        </main>

        <aside>
          <h3>Cafés selecionados</h3>

          <OrderAmountContainer>
            {cart.map((item) => (
              <OrderItem key={item.id} {...item} />
            ))}

            <table>
              <tbody>
                <tr>
                  <td>Total de itens</td>
                  <td>{priceFormatter.format(productTotal)}</td>
                </tr>
                <tr>
                  <td>Entrega</td>
                  <td>{priceFormatter.format(shipping)}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>{priceFormatter.format(totalOrder)}</td>
                </tr>
              </tfoot>
            </table>
            <button
              type="submit"
              disabled={isCartEmpty || isSubmitting}
              form="checkoutForm"
            >
              Confirmar pedido
            </button>
          </OrderAmountContainer>
        </aside>
      </CheckoutContainer>
    </LayoutContainer>
  )
}
