import React from 'react'
import { useNavigate} from "react-router-dom";
import './notFoundPage.css'

const NotFoundPage = () => {
  let navigate = useNavigate();

  return (
    <div className='notFoundPage'>
      <button className='notFoundPage_btn' onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default NotFoundPage
