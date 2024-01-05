import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  const location = useLocation()
  const { pathname } = location
  const isHome = pathname === '/'

  return (
    <>
      <Header $isHome={isHome} />
      <Outlet />
    </>
  )
}
