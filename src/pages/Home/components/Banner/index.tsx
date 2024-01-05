import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { LayoutContainer } from '../../../../styles/layoutContainer'
import { BannerContainer, BannerContent } from './styles'
import bannerImg from '../../../../assets/banner-img.png'

export function Banner() {
  return (
    <BannerContainer>
      <LayoutContainer>
        <BannerContent>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
            <ul>
              <li>
                <span className="shoppingCart">
                  <ShoppingCart size={16} weight="fill" />
                </span>{' '}
                Compra simples e segura
              </li>
              <li>
                <span className="package">
                  <Package size={16} weight="fill" />
                </span>{' '}
                Embalagem mantém o café intacto
              </li>
              <li>
                <span className="timer">
                  <Timer size={16} weight="fill" />
                </span>{' '}
                Entrega rápida e rastreada
              </li>
              <li>
                <span className="coffee">
                  <Coffee size={16} weight="fill" />
                </span>{' '}
                O café chega fresquinho até você
              </li>
            </ul>
          </div>
          <img src={bannerImg} alt="" />
        </BannerContent>
      </LayoutContainer>
    </BannerContainer>
  )
}
