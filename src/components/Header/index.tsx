import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import {
  HeaderContainer,
  HeaderContent,
  LogoLink,
  UserLocation,
  Badge,
} from './styles'
import { LayoutContainer } from '../../styles/layoutContainer'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

interface HeaderProps {
  $isHome: boolean
}

export function Header({ $isHome }: HeaderProps) {
  const { cart, order } = useContext(OrderContext)
  const cartProductsQuantity = cart.length
  const city =
    order.city && order.district ? `${order.city}, ${order.state}` : ''

  return (
    <HeaderContainer $isHome={$isHome}>
      <LayoutContainer>
        <HeaderContent>
          <LogoLink to="/">
            <img src={logoCoffeeDelivery} alt="" />
          </LogoLink>

          <nav>
            <UserLocation>
              <MapPin size={22} weight="fill" color="#8047F8" />
              {city}
            </UserLocation>
            <NavLink to="/checkout" title="Checkout">
              <ShoppingCart size={22} weight="fill" />
              {cartProductsQuantity > 0 && (
                <Badge>{cartProductsQuantity}</Badge>
              )}
            </NavLink>
          </nav>
        </HeaderContent>
      </LayoutContainer>
    </HeaderContainer>
  )
}
