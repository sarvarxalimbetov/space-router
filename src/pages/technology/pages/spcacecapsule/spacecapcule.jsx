import React from 'react'
import TechnologyContent from '../../components/technology-content/technology-content'
import data from '../../data.js'
import spacecapsuleImage from '../../../../assets/images/spaceCapsule.png'

const SpaceCapcule = () => {
  return (
    <TechnologyContent img={spacecapsuleImage} {...data[2]}/>
  )
}

export default SpaceCapcule
