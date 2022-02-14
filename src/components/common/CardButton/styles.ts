// External libraries
import styled from 'styled-components'

interface CardProps {
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

export const Container = styled.button<CardProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marignLeft};
  margin-right: ${props => props.marginRight};
  padding-left: ${props => props.paddingHorizontal};
  padding-right: ${props => props.paddingHorizontal};
  padding-top: ${props => props.paddingVertical};
  padding-bottom: ${props => props.paddingVertical};
  color: ${props => props.color};
  background: ${props => props.background};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  border-end-start-radius: ${props => props.borderBottomLeftRadius};
  border-end-end-radius: ${props => props.borderBottomRightRadius};
  border-start-start-radius: ${props => props.borderTopLeftRadius};
  border-start-end-radius: ${props => props.borderTopRightRadius};

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    filter: brightness(95%);
  }
`
