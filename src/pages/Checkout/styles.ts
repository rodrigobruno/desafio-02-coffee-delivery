import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckoutContainer = styled.div`
  padding-block: 2.5rem 10rem;
  display: flex;
  gap: 2rem;

  main {
    flex-basis: 57.14%;

    > h2 {
      color: ${(props) => props.theme.colors['base-subtitle']};
      font-size: 1.125rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
  }

  aside {
    flex: 1;
    > h3 {
      color: ${(props) => props.theme.colors['base-subtitle']};
      font-size: 1.125rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }
`

const OrderFieldset = styled.fieldset`
  background: ${(props) => props.theme.colors['base-card']};
  border: 0;
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  legend {
    float: left;
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    column-gap: 0.5rem;
    row-gap: 2px;

    svg {
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 2;
    }

    h3 {
      color: ${(props) => props.theme.colors['base-subtitle']};
      font-family: Roboto;
      font-size: 1rem;
      font-weight: 400;
    }

    p {
      color: ${(props) => props.theme.colors['base-text']};
      font-size: 0.875rem;
    }
  }
`

export const OrderAddressContainer = styled(OrderFieldset)`
  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`
export const OrderPaymentContainer = styled(OrderFieldset)`
  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const AddressInputs = styled.div`
  display: grid;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-template-columns: 35.71% 49.29% 10.71%;
  grid-template-rows: repeat(4, auto);

  input {
    border: 1px solid ${(props) => props.theme.colors['base-button']};
    border-radius: 4px;
    background: ${(props) => props.theme.colors['base-input']};
    color: ${(props) => props.theme.colors['base-text']};
    font-size: 0.875rem;
    padding: 0.75rem;
    width: 100%;
  }

  input::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }

  input:focus {
    border-color: ${(props) => props.theme.colors['yellow-dark']};
    box-shadow: none;
  }

  input[name='zipCode'] {
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  input[name='street'] {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 4;
  }

  input[name='number'] {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .complement {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 4;
    position: relative;

    .notRequired {
      border: 1px solid transparent;
      color: ${(props) => props.theme.colors['base-label']};
      font-size: 0.75rem;
      font-style: italic;
      padding: 0.8125rem;
      position: absolute;
      right: 0;
      vertical-align: middle;
    }
  }

  input[name='complement'] {
    padding-right: 3.875rem;
  }

  input[name='district'] {
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  input[name='city'] {
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 3;
  }

  input[name='state'] {
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 3;
    grid-column-end: 4;
  }
`

export const PaymentType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`

export const PaymentTypeButton = styled(RadioGroup.Item)`
  align-items: center;
  background: ${(props) => props.theme.colors['base-button']};
  border: 1px solid transparent;
  border-radius: 6px;
  color: ${(props) => props.theme.colors['base-text']};
  cursor: pointer;
  display: flex;
  font-size: 0.75rem;
  gap: 0.75rem;
  justify-content: center;
  padding: 1rem;
  text-transform: uppercase;

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme.colors['base-hover']};
    color: ${(props) => props.theme.colors['base-title']};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme.colors['purple-light']};
    border: 1px solid ${(props) => props.theme.colors.purple};
  }
`

export const OrderAmountContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;

  table {
    tbody {
      font-size: 0.875rem;

      tr:nth-child(2) td {
        padding-block: 0.75rem;
      }
    }

    tfoot {
      color: ${(props) => props.theme.colors['base-title']};
      font-size: 1.25rem;
      font-weight: 700;
    }

    tr td:nth-child(2) {
      text-align: right;
    }
  }

  button[type='submit'] {
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
    padding: 0.75rem 0.5rem;

    &:hover {
      background: ${(props) => props.theme.colors['yellow-dark']};
      transition: background-color 0.2s;
    }
  }
`

export const OrderItem = styled.div`
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
