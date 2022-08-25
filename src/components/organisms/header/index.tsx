import React from 'react'
import { NavList } from '../../atoms/buttons/navList'

import { HeaderStyled } from './styles'

export const Header = ({children}: any) => {
  return (
    <HeaderStyled>
      <>
        <NavList></NavList>
        {children}
      </>
    </HeaderStyled>
  )
}