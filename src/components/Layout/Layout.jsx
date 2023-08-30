import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectorsAuth';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
const Layout = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
