import React from 'react'

import { InputStyled } from './styles'

interface IProps {
  placeholder?: string
  type?: string
  value?: string
  onChange?: any
  id: string
}

const Input: React.FC<IProps> = (props) => {
  return <InputStyled {...props} />
}

export default Input
