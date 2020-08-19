import React, { ReactNode } from 'react'

import { ButtonStyled } from './styles'

interface IProps {
  children?: ReactNode
  onClick?: any
}
const Input: React.FC<IProps> = (props) => {
  console.log(props)
  return <ButtonStyled onClick={props.onClick}>{props.children}</ButtonStyled>
}

export default Input
