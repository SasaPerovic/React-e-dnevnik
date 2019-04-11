import React from 'react'
import { Logo } from './logo.styled'
import siteLogo from '@/assets/1.png'

const logo = props => (
  <Logo {...props}>
    <img src={siteLogo} alt="e-dnevnik" />
  </Logo>
)

export default logo
