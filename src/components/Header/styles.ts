import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const LogoLink = styled(Link)`
  line-height: 0;
`

export const UserLocation = styled.span`
  align-items: center;
  background: ${(props) => props.theme.colors['purple-light']};
  border-radius: 6px;
  color: ${(props) => props.theme.colors['purple-dark']};
  display: flex;
  font-size: 0.875rem;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
`

export const Badge = styled.span`
  background: ${(props) => props.theme.colors['yellow-dark']};
  border-radius: 999rem;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface HeaderContainerProps {
  $isHome: boolean
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  background: ${(props) => props.theme.colors.background};

  ${(props) =>
    props.$isHome &&
    css`
      position: sticky;
      inset: 0;
    `}
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 2rem;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      border-radius: 6px;
      background: ${(props) => props.theme.colors['yellow-light']};
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.colors['yellow-dark']};
      padding: 0.5rem;
      position: relative;

      &:hover {
        background: ${(props) => props.theme.colors.yellow};
        color: ${(props) => props.theme.colors.white};
        transition: background-color 0.2s;
      }

      ${Badge} {
        position: absolute;
        inset: 0 100%;
        transform: translate(-50%, -50%);
      }
    }
  }
`
