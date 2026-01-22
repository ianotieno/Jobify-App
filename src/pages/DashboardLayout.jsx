import { Outlet } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar } from '../components';
import SmallSideBar from '../components/SmallSideBar';

const Dashboard = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <BigSidebar />
        <SmallSideBar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Dashboard;
