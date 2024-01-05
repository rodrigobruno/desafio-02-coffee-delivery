import styled from 'styled-components'

export const ProductsContainer = styled.section`
  padding-block: 2rem 10rem;

  h3 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 3.5rem;
  }
`

export const ProductsList = styled.div`
  display: grid;
  column-gap: 2rem;
  flex-wrap: wrap;
  row-gap: 2.5rem;
  grid-template-columns: repeat(4, 1fr);
`
