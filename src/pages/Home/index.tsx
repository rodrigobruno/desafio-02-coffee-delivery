import { LayoutContainer } from '../../styles/layoutContainer'
import { Banner } from './components/Banner'
import { ProductsContainer, ProductsList } from './styles'
import { ProductCard } from './components/ProductCard'
import { coffees } from '../../data.json'

export function Home() {
  return (
    <>
      <Banner />
      <LayoutContainer>
        <ProductsContainer>
          <h3>Nossos cafés</h3>
          <ProductsList>
            {coffees.map((coffee) => (
              <ProductCard key={coffee.id} {...coffee} />
            ))}
          </ProductsList>
        </ProductsContainer>
      </LayoutContainer>
    </>
  )
}
