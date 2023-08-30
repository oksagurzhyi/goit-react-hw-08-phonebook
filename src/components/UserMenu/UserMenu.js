import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectorsAuth';
import { logOutUser } from 'redux/auth/operationsAuth';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <p>Hello, {user.email}</p>
      <Button
        size="xs"
        onClick={() => dispatch(logOutUser())}
        style={{
          marginLeft: '10px',
        }}
      >
        LogOut
      </Button>
    </div>
  );
};

export default UserMenu;
