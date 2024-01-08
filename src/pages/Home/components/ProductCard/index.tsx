import { ShoppingCart } from 'phosphor-react'
import {
  ProductCardContainer,
  ProductTagsContainer,
  ProductBuyContainer,
} from './styles'
import { QuantityInput } from '../../../../components/QuantityInput'
import { priceFormatter } from '../../../../utils/formatter'
import { useContext, useState } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import IProduct from '../../../../@types/IProduct'

interface ProductCardProps extends IProduct {}

export function ProductCard(product: ProductCardProps) {
  const { image, title, tags, description, price } = product
  const { addNewProdutcToCart } = useContext(OrderContext)

  const [quantity, setQuantity] = useState(1)

  function handleIncreaseQuantity() {
    setQuantity((state: number) => state + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) setQuantity((state: number) => state - 1)
  }

  function handleAddToCart() {
    addNewProdutcToCart({ ...product, quantity })
    setQuantity(1)
  }

  return (
    <ProductCardContainer>
      <img src={image} alt={title} />
      <ProductTagsContainer>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </ProductTagsContainer>
      <h4>{title}</h4>
      <p>{description}</p>
      <ProductBuyContainer>
        <span>
          R${' '}
          <strong>
            {priceFormatter.format(price).replace('R$', '').trim()}
          </strong>
        </span>
        <div>
          <QuantityInput
            quantity={quantity}
            increaseQuantity={handleIncreaseQuantity}
            decreaseQuantity={handleDecreaseQuantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </ProductBuyContainer>
    </ProductCardContainer>
  )
}
