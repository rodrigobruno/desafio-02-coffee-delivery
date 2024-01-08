import styled from 'styled-components'

export const OrderItemContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  display: grid;
  column-gap: 1.25rem;
  row-gap: 0.5rem;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: repeat(2, auto);
  padding-bottom: 1.5rem;

  img {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    height: 4rem;
    width: 4rem;
  }

  .title {
  }

  .price {
    font-weight: 700;
  }

  .actions {
    display: flex;
    gap: 0.5rem;

    > button {
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme.colors['base-button']};
      cursor: pointer;
      font-size: 0.75rem;
      line-height: 160%;
      text-transform: uppercase;
      padding: 0rem 0.5rem;

      display: flex;
      gap: 0.25rem;
      align-items: center;

      > svg {
        color: ${(props) => props.theme.colors.purple};
      }

      &:hover {
        background: ${(props) => props.theme.colors['base-hover']};
        transition: background-color 0.2s;
      }
    }
  }
`
