import { ShoppingCart } from 'phosphor-react'
import {
  ProductCardContainer,
  ProductTagsContainer,
  ProductBuyContainer,
} from './styles'
import { QuantityInput } from '../../../../components/QuantityInput'
import { priceFormatter } from '../../../../utils/formatter'

interface ProductCardProps {
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function ProductCard({
  title,
  description,
  tags,
  price,
  image,
}: ProductCardProps) {
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
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </ProductBuyContainer>
    </ProductCardContainer>
  )
}
