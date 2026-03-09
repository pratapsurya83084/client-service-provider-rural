import React from 'react'

import  RightSide from '../../components/Admin/RightSide';
import LeftSidebar from '../../components/Admin/LeftSideBar';


const Dashboard = () => {
  return (
    <div className='flex'>
      <div>
        <LeftSidebar/>
      </div>

      {/* <div>
        <RightSide/>
      </div> */}

    </div>
  )
}

export default Dashboard
