import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { OrderItemContainer } from './styles.ts'
import { priceFormatter } from '../../../../utils/formatter.ts'
import { OrderContext } from '../../../../contexts/OrderContext.tsx'
import { useContext } from 'react'
import IProduct from '../../../../@types/IProduct.ts'

interface OrderItemProps extends IProduct {}

export default function OrderItem(product: OrderItemProps) {
  const { title, price, image, quantity } = product
  const totalOfItem = price * quantity

  const {
    removeProdutcFromCart,
    increaseQuantityProduct,
    decreaseQuantityProduct,
  } = useContext(OrderContext)

  function handleIncreaseQuantity() {
    increaseQuantityProduct(product)
  }

  function handleDecreaseQuantity() {
    decreaseQuantityProduct(product)
  }

  return (
    <OrderItemContainer>
      <img src={image} alt={title} />
      <span className="title">{title}</span>
      <span className="price">{priceFormatter.format(totalOfItem)}</span>
      <div className="actions">
        <QuantityInput
          quantity={quantity}
          increaseQuantity={handleIncreaseQuantity}
          decreaseQuantity={handleDecreaseQuantity}
        />
        <button onClick={() => removeProdutcFromCart(product)}>
          <Trash size={16} />
          Remover
        </button>
      </div>
    </OrderItemContainer>
  )
}
