import React from 'react'
import data from '../../data'
import titanImage from '../../../../assets/images/titan.png'
import DestinationContent from '../../components/destination-content/destination-content'



const TitanPage = () => {
  return (
    <div>
      <DestinationContent img={titanImage} {...data.titan}/>
    </div>
  )
}

export default TitanPage
