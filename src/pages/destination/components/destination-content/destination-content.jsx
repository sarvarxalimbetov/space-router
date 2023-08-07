import React from 'react'
import './destination-content.css'

const DestinationContent = ({img, title, desc, distance, time}) => {
  return (
    <div className='content'>
        <img className='content_img' src={img} alt={title} />

        <div className="content_info">
            <h1 className="content_title">{title}</h1>
            <p className="content_desc">{desc}</p>
            <span className='content_line' />

            <div className="content_timeInfo">
                <div className="content_distance">
                    <p>avg. distance</p>
                    <span>{distance}</span>
                </div>
                <div className="content_time">
                    <p>est. travel time</p>
                    <span>{time}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DestinationContent
