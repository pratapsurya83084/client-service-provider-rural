import React from 'react'
import { useLocation } from 'react-router-dom'

const RightSide = () => {
  const path = useLocation();
  console.log(path.pathname)
  return (
    <div>
   right side
    </div>
  )
}

export default RightSide
