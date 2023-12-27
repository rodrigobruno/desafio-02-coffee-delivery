import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { HeaderContainer, LogoLink, UserLocation, Badge } from './styles'

interface HeaderProps {
  $isHome: boolean
}

export function Header({ $isHome }: HeaderProps) {
  return (
    <HeaderContainer $isHome={$isHome}>
      <LogoLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </LogoLink>

      <nav>
        <UserLocation>
          <MapPin size={22} weight="fill" color="#8047F8" />
          Porto Alegre, RS
        </UserLocation>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
          <Badge>1</Badge>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
