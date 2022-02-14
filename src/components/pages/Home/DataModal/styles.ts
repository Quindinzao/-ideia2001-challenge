// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../../styles/theme'

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: auto;
`

export const Grid = styled.div`
  max-height: 360px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  main {
    padding: 12px;

    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.background};
    border-radius: 12px;

    li {
      font-size: 14px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
