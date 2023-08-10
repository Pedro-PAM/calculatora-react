import React from 'react'
import { ButtonContainer } from './styles'

function Button({label, onClick}){
  return (
    <ButtonContainer onClick={onClick} type="button">
      {label}
    </ButtonContainer>

  )
}
export default Button