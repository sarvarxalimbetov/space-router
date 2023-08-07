import React from 'react'
import data from '../../data'
import marsImage from '../../../../assets/images/mars.png'
import DestinationContent from '../../components/destination-content/destination-content'

const MarsPage = () => {
  return (
    <div>
      <DestinationContent img={marsImage} {...data.mars}/>
    </div>
  )
}

export default MarsPage
