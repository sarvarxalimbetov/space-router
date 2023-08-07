import React from 'react'
import TechnologyContent from '../../components/technology-content/technology-content'
import data from '../../data.js'
import spaceportImage from '../../../../assets/images/spaceport.png'

const Spaceport = () => {
  return (
    <TechnologyContent img={spaceportImage} {...data[1]}/>
  )
}

export default Spaceport
