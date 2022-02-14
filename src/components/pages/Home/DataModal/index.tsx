// External libraries
import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'

// Utils
import data from '../../../../utils/data'

// Styled
import theme from '../../../../styles/theme'
import { Content, Grid } from './styles'

interface DataModalProps {
  idPressed: number
  isOpen: boolean
  onRequestClose: () => void
}

const DataModal: React.FC<DataModalProps> = ({
  idPressed,
  isOpen,
  onRequestClose
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='react-modal-content'
      overlayClassName='react-modal-overlay'
    >
      <Content>
        <Grid>
        {idPressed === 0 &&
          data[idPressed].dataEvents.map(dataEvent =>
            <main key={dataEvent.id}>
              <h6>{dataEvent.title}</h6>
              <li>{dataEvent.localization}</li>
              <li>{dataEvent.date}</li>
            </main>
          )
        }
        {idPressed === 1 &&
          data[idPressed].dataUsers.map(dataUser =>
            <main key={dataUser.id}>
              <h6>{dataUser.name}</h6>
              <li>{dataUser.age}</li>
              <li>{dataUser.status}</li>
              <li>{dataUser.profession}</li>
            </main>
          )
        }
        {idPressed === 2 &&
          data[idPressed].dataReports.map(dataReport =>
            <main key={dataReport.id}>
              <h6>{dataReport.theme}</h6>
              <li>{dataReport.report}</li>
            </main>
          )}
        </Grid>
      </Content>
    </ReactModal>
  )
}

export default DataModal
