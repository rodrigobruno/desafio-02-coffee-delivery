import styled from 'styled-components'

export const OrderContainer = styled.main`
  padding-block: 5rem 10rem;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors['yellow-dark']};
    margin-bottom: 0.25rem;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }
`

export const OrderInfos = styled.section`
  align-items: center;
  display: flex;
  gap: 6.25rem;
`

export const OrderDatailsContainer = styled.ul`
  background:
    linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(135deg, #dbac2c 0%, #8047f8 100%) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  display: inline-flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
  list-style-type: none;
  padding: 2.5rem;
  position: relative;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    line-height: 130%;

    span {
      display: block;
      background: ${(props) => props.theme.colors['yellow-dark']};
      border-radius: 999rem;
      color: ${(props) => props.theme.colors.background};
      line-height: 0;
      padding: 0.5rem;
    }

    .mapPin {
      background: ${(props) => props.theme.colors.purple};
    }

    .timer {
      background: ${(props) => props.theme.colors.yellow};
    }

    .currencyDollar {
      background: ${(props) => props.theme.colors['yellow-dark']};
    }
  }
`
