// External libraries
import React, { ReactNode } from 'react'

// Styled
import { Container } from './styles'

interface CardProps {
  children?: ReactNode
  onClick?: any

  width?: string
  height?: string

  paddingVertical?: string
  paddingHorizontal?: string

  marginTop?: string
  marginBottom?: string
  marignLeft?: string
  marginRight?: string

  background?: string
  border?: string
  borderRadius?: string
  borderBottomLeftRadius?: string
  borderBottomRightRadius?: string
  borderTopLeftRadius?: string
  borderTopRightRadius?: string
}

const  CardButton: React.FC<CardProps> = ({
  children,
  onClick,
  width,
  height,
  paddingVertical,
  paddingHorizontal,
  marginTop,
  marginBottom,
  marignLeft,
  marginRight,
  background,
  border,
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius
}) => {
  return (
    <Container
      onClick={onClick}
      width={width}
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marignLeft={marignLeft}
      marginRight={marginRight}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      background={background}
      border={border}
      borderRadius={borderRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderBottomRightRadius={borderBottomRightRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
    >
      {children}
    </Container>
  )
}

export default CardButton
