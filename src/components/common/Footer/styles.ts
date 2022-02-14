// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

export const Container = styled.header`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.black};

  font-size: 12px;
  color: #9c9c9c;

  span {
    color: ${theme.colors.primary};
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: fit-content;

    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;

    flex-direction: column;
  }
`
