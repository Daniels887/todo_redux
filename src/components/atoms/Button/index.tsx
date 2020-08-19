import React, { ReactNode } from 'react'

import { ButtonStyled } from './styles'

interface IProps {
  children?: ReactNode
  onClick?: any
  id: string
}
const Input: React.FC<IProps> = (props) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}

export default Input
