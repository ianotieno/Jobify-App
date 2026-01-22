import React from 'react'
import Wrapper from '../assets/wrappers/NavBar'

import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';

function NavBar() {
  return (
    <Wrapper>
     <div className='nav-center'>
        <button type='button' className='toggle-btn' >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>dashboard</h4>
        </div>
        <div className='btn-container'>toggle/logout</div>
      </div>
    </Wrapper>
  )
}

export default NavBar
