// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 24px;
    font-weight: 200;
    color: ${theme.colors.primary};
  }
`
