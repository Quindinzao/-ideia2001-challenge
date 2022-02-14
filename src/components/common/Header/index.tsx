// External libraries
import React, { useState } from 'react'

// Styled
import {
  ButtonMenu,
  Container,
  Content,
  Link,
  Nav,
  User,
  UserInfo,
  UserRow
} from './styles'

interface HeaderProps {
  home?: boolean
  events?: boolean
  users?: boolean
  reports?: boolean
}

const Header: React.FC<HeaderProps> = ({
  home,
  events,
  users,
  reports
}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Container isActive={isActive}>
      <Content isActive={isActive}>
        <img src='/images/logo.png' alt='logo' />
        <Nav>
          <Link href='/' isActive={home}>
            Home
          </Link>
          <Link href='/events' isActive={events}>
            Eventos
          </Link>
          <Link href='/users' isActive={users}>
            Usuários
          </Link>
          <Link href='/reports' isActive={reports}>
            Relatórios
          </Link>
        </Nav>
        <User>
          <img src='/images/user.png' alt='user' />
          <UserInfo>
            <UserRow>
              João Victor Fernandes
            </UserRow>
            <UserRow>
              <a href='/'>Desconectar</a>
            </UserRow>
          </UserInfo>
        </User>
      </Content>
      <ButtonMenu onClick={() => setIsActive(!isActive)}>
        &#9776;
      </ButtonMenu>
    </Container>
  )
}

export default Header
