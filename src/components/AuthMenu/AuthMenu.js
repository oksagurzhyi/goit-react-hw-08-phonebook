import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
      }}
    >
      <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/login">LogIn</NavLink>
    </div>
  );
};

export default AuthMenu;
