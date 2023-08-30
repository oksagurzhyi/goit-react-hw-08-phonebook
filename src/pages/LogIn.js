import { logInUser } from 'redux/auth/operationsAuth';
import { useDispatch } from 'react-redux';
import { Box, Button, Flex, Input } from '@chakra-ui/react';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logInUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex bg="gray.100" justify="center" h="100vh" alignItems="flex-start">
      <Box bg="white" p={10} m={10} rounded="md">
        <form onSubmit={handleSubmit}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <label>
              Email
              <Input
                type="email"
                name="email"
                placeholder="Enter your e-mail"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Please, enter correct e-mail address."
                required
              />
            </label>
            <label>
              Password
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />
            </label>
          </div>
          <Button type="submit" colorScheme="blue" w="full" mt={5}>
            LogIn
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
export default Login;
