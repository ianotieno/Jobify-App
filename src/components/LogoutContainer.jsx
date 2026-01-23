import React from 'react'
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useState } from 'react';


function LogoutContainer() {
  const [showLogout, setShowLogout] = useState(false);
  
  return (
    <Wrapper>
      <button type='button' className='btn logout-btn'
      onClick={() => setShowLogout(!showLogout)}
      >

      </button>
    </Wrapper>
  )
}

export default LogoutContainer
