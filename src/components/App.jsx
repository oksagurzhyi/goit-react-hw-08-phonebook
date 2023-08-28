import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'auth/operationsAuth';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const RegisterPage = lazy(() => import('../pages/RegisterForm'));
const LoginPage = lazy(() => import('../pages/LogIn'));
const ContactPage = lazy(() => import('../pages/Contacts'));
const HomePage = lazy(() => import('../pages/Home'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Box
      // bg="grey"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="registration"
            element={
              <PublicRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute component={<LoginPage />} redirectTo="/contacts" />
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute component={<ContactPage />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    </Box>
  );
}
