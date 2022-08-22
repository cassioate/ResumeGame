import React from 'react'
import { FooterStyled } from './styles'

export const Footer = ({children}: any) => {
  return (
    <FooterStyled>
      {children}
    </FooterStyled>
  )
}