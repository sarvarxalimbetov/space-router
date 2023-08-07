import React from 'react'
import TechnologyContent from '../../components/technology-content/technology-content'
import data from '../../data.js'
import launchImage from '../../../../assets/images/launch.png'

const Launch = () => {
  return (
      <TechnologyContent img={launchImage} {...data[0]}/>
  )
}

export default Launch
