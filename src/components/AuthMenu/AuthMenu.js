import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const AuthMenu = () => {
  return (
    <div
    // style={{
    //   display: 'flex',
    //   gap: '20px',
    // }}
    >
      <Button colorScheme="blue" mr={5}>
        <NavLink to="/registration">Registration</NavLink>
      </Button>
      <Button colorScheme="blue" mr={5}>
        <NavLink to="/login">LogIn</NavLink>
      </Button>
    </div>
  );
};

export default AuthMenu;
