import React from 'react'
import data from '../../data.js'
import moonImage from "../../../../assets/images/moon.png"
import DestinationContent from '../../components/destination-content/destination-content'

const MoonPage = () => {
  return (
    <div>
      <DestinationContent img={moonImage} {...data.moon}/>
    </div>
  )
}

export default MoonPage
