import React from 'react'
import headerImg from '@/assets/087.jpg'
import Image from './image.styled'

const image = props => (
  <Image {...props}>
    <img src={headerImg} alt="head"/>
  </Image>
)
export default image
