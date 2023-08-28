import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'auth/selectorsAuth';
import { logOutUser } from 'auth/operationsAuth';

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
