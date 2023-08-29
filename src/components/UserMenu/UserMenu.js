import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectorsAuth';
import { logOutUser } from 'redux/auth/operationsAuth';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <div>
      <p>Hello, {user.email}</p>
      <Button onClick={() => dispatch(logOutUser())}>LogOut</Button>
    </div>
  );
};

export default UserMenu;
