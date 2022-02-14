// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const HeaderContent = styled.div`
  width: 100%;
  height: 7.5rem;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: fit-content;
    height: fit-content;
  }
`

export const OrangeContent = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${theme.colors.primary};
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  margin-top: -5rem;
  padding-left: 7.5rem;
  padding-right: 7.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-top: -10rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const GridContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 7.5rem;
  padding-top: 2.5rem;
  padding-bottom: 12.5rem;

  background-color: ${theme.colors.white};

  p {
    max-width: 768px;
    width: 100%;

    margin-bottom: 2.5rem;
    padding-top: 3.5rem;

    font-weight: 450;
    text-align: center;

    span {
      font-weight: 600;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    p {
      width: 248px;
    }
  }
`

export const Grid = styled.div`
  width: fit-content;

  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: auto auto;
  }
`

export const GridContent = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h6 {
    margin-top: 2rem;
  }
`
