import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding: 0 1.25rem 1.25rem 1.25rem;

  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    height: 7.5rem;
    margin-block: -1.25rem 0.75rem;
    width: 7.5rem;
  }

  h4 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: 0.875rem;
    margin-bottom: 2rem;
  }
`

export const ProductTagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;

  span {
    background: ${(props) => props.theme.colors['yellow-light']};
    border-radius: 999rem;
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-size: 0.625rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
  }
`

export const ProductBuyContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  > span {
    font-size: 0.875rem;

    > strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

  > div {
    display: flex;
    align-items: stretch;
    gap: 0.5rem;

    > button {
      background: ${(props) => props.theme.colors['purple-dark']};
      border: 0;
      border-radius: 6px;
      color: ${(props) => props.theme.colors['base-card']};
      cursor: pointer;
      line-height: 0;
      padding: 0.5rem;

      &:hover {
        background: ${(props) => props.theme.colors.purple};
        transition: background-color 0.2s;
      }
    }
  }
`
