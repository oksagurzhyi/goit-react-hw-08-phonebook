import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { selectIsLoggedIn, selectIsRefreshing } from 'auth/selectorsAuth';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <div>
      <div>
        <Navigation />
        {isLoggedIn && !isRefreshing ? <UserMenu /> : <AuthMenu />}
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
