import styled from 'styled-components'
import bannerBg from '../../../../assets/banner-bg.svg'

export const BannerContainer = styled.main`
  align-items: center;
  background: url(${bannerBg});
  display: flex;
  height: 34rem;
`
export const BannerContent = styled.div`
  display: flex;
  gap: 3.5rem;

  h1 {
    color: ${(props) => props.theme.colors['base-title']};
    font-size: 3rem;
  }

  h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    margin-top: 1rem;
  }

  ul {
    display: grid;
    grid-template-columns: auto 1fr;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
    list-style-type: none;
    margin-top: 4rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      span {
        display: block;
        background: ${(props) => props.theme.colors['yellow-dark']};
        border-radius: 999rem;
        color: ${(props) => props.theme.colors.background};
        line-height: 0;
        padding: 0.5rem;
      }

      .package {
        background: ${(props) => props.theme.colors['base-text']};
      }

      .timer {
        background: ${(props) => props.theme.colors.yellow};
      }

      .coffee {
        background: ${(props) => props.theme.colors.purple};
      }
    }
  }
`
