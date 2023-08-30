import { Box, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Flex bg="gray.100" justify="center" h="100vh" alignItems="flex-start">
        <Link to={isLoggedIn ? '/contacts' : '/registration'}>
          <Box bg="white" p={10} m={10} rounded="md">
            Create new contact.
          </Box>
        </Link>
      </Flex>
    </>
  );
};
export default Home;
