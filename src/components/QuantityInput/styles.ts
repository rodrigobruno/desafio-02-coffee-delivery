import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 8px;
  color: ${(props) => props.theme.colors['base-title']};
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;

  span {
    text-align: center;
    width: 1.25rem;
  }

  button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.purple};
    cursor: pointer;
    line-height: 0;

    &:not(:disabled):hover {
      color: ${(props) => props.theme.colors['purple-dark']};
      transition: background-color 0.2s;
    }

    &:disabled {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`
