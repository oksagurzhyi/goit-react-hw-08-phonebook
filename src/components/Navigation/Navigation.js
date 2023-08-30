import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectorsAuth';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import { Button, Box, Flex, Container } from '@chakra-ui/react';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box as="header" w="100%" bgGradient="linear(to top, #373b44, #4286f4)">
      <Container
        pl="10px"
        pr="10px"
        className="containerSL"
        maxW={['400px', '450px', '768px', '900px', '1440px']}
      >
        <Flex
          pt={5}
          pb={5}
          as="nav"
          justifyContent={isLoggedIn ? 'space-between' : 'flex-end'}
        >
          {isLoggedIn && (
            <Button colorScheme="blue" mr={5}>
              <NavLink to="/contacts">Contacts</NavLink>
            </Button>
          )}
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
