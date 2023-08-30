import { Button, Flex, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectorsAuth';
import { logOutUser } from 'redux/auth/operationsAuth';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <div>
      <Flex align="center">
        <Text color="white" fontSize={['10px', '12px', '14px', '16px']}>
          Hello, {user.email}
        </Text>

        <Button
          type="button"
          colorscheme="blue"
          w="full"
          ml={5}
          onClick={() => dispatch(logOutUser())}
        >
          LogOut
        </Button>
      </Flex>
    </div>
  );
};

export default UserMenu;
