// External libraries
import React, { useEffect, useState } from 'react'

// Components
import Header from '../../common/Header'
import CardButton from '../../common/CardButton'
import DataModal from './DataModal'
import Footer from '../../common/Footer'

// Utils
import data from '../../../utils/data'

// Styled
import theme from '../../../styles/theme'
import {
  HeaderContent,
  Container,
  Content,
  OrangeContent,
  GridContainer,
  Grid,
  GridContent
} from './styles'

const Home: React.FC = () => {
  const [isOpenDataModal, setIsOpenDataModal] = useState(false)
  const [idPressed, setIdPressed] = useState(null)

  const handleCloseDataModal = () => setIsOpenDataModal(false)

  return (
    <Container>
      <HeaderContent>
        <Header home={true} />
      </HeaderContent>
      <OrangeContent />
      <Content>
        <GridContainer>
          <p>
            Olá, <span>João Victor Fernandes</span>,
            Selecione uma das opções abaixo:
          </p>
          <Grid>
            {data.map((card) =>
              <CardButton
                key={card.id}
                width='240px'
                height='240px'
                background={
                  `linear-gradient(
                  ${theme.colors.white},
                  ${theme.colors.background})`
                }
                border={`1px solid ${theme.colors.background}`}
                borderRadius='36px'
                onClick={() => {
                  setIdPressed(card.id)
                  setIsOpenDataModal(true)
                }}
              >
                <GridContent>
                  <img src={card.image} alt='card image' />
                  <h6>{card.title}</h6>
                </GridContent>
              </CardButton>
            )}
          </Grid>
        </GridContainer>
      </Content>
      <Footer />
      <DataModal
        idPressed={idPressed}
        isOpen={isOpenDataModal}
        onRequestClose={handleCloseDataModal}
      />
    </Container>
  )
}

export default Home
