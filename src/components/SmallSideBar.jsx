import React from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDashboardContext } from '../pages/DashboardLayout'; 

function SmallSideBar() {
  const data = useDashboardContext(); 
  console.log(data);
  return (
    <Wrapper>

      <h5>Small Side Bar</h5>
    </Wrapper>
  );
}

export default SmallSideBar;