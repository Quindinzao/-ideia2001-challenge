// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

interface HeaderProps {
  isActive: boolean
}

export const Container = styled.header<HeaderProps>`
  width: 100%;
  height: 7.5rem;

  padding-left: 7.5rem;
  padding-right: 7.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: ${theme.colors.white};

  @media only screen and (max-width: 768px) {

    width: ${(props) => props.isActive
      ? '100%'
      : 'fit-content'
    };
    height: ${(props) => props.isActive
      ? '100%'
      : 'fit-content'
    };
  }
`

export const Content = styled.div<HeaderProps>`
  width: 100%;
  height: 7.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 100%;

    padding-top: 5rem;
    padding-bottom: 5rem;

    flex-direction: column-reverse;

    display: ${(props) => props.isActive
      ? 'flex'
      : 'none'
    };
  }
`

export const Nav = styled.nav`
  width: 100%;
  max-width: 480px;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    height: fit-content;

    margin-top: 2.5rem;

    justify-content: center;
    flex-direction: column;
  }
`

interface LinkProps {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  width: fit-content;
  height: 7.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 500;
  line-height: 18px;
  text-decoration: none;

  color: ${(props) => props.isActive
    ? theme.colors.text
    : theme.colors.text_inactive
  };

  ${(props) => props.isActive &&
    '::after { ' +
      'content: "";' +
      'height: 3px;' +
      'border-radius: 3px;' +
      'width: 64px;' +
      'position: absolute;' +
      'bottom: 3rem;' +
      `background: ${theme.colors.primary};` +
    '}'
  }

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: ${theme.colors.text};
  }

  @media only screen and (max-width: 768px) {
    width: fit-content;
    height: fit-content;

    margin-bottom: 2.5rem;

    align-items: center;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`

export const UserInfo = styled.div`
  width: fit-content;
  height: 100%;

  margin-left: 12px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    margin-left: 0px;

    align-items: center;
  }
`

export const UserRow = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-weight: 600;

  a {
    color: ${theme.colors.primary}
  }

  @media only screen and (max-width: 768px) {
    margin-top: 16px;

    justify-content: center;
    flex-direction: column;

    text-align: center;
  }
`

export const ButtonMenu = styled.button`
  width: 64px;
  height: 64px;

  display: none;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  font-size: 2rem;
  color: ${theme.colors.primary};

  position: fixed;
  top: 12px;
  left: 12px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`
