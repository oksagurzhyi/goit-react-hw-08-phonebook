import { useDispatch } from 'react-redux';
import { createUser } from 'redux/auth/operationsAuth';
import { Box, Button, Flex, Input } from '@chakra-ui/react';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      createUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log(form.elements.email.value);
    form.reset();
  };

  return (
    <Flex bg="gray.100" justify="center" h="100vh" alignItems="flex-start">
      <Box bg="white" p={10} m={10} rounded="md">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <label>
              UserName
              <Input
                type="text"
                name="name"
                placeholder="Enter UserName"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
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
            Sign Up
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
export default RegisterForm;
