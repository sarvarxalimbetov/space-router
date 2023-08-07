import React from 'react'
import data from '../../data'
import europaImage from '../../../../assets/images/europa.png'
import DestinationContent from '../../components/destination-content/destination-content'


const EuropaPage = () => {
  return (
    <div>
      <DestinationContent img={europaImage} {...data.europa} />
    </div>
  )
}

export default EuropaPage
