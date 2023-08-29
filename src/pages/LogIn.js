import { Button, Input } from '@chakra-ui/react';
import { logInUser } from 'redux/auth/operationsAuth';
import { useDispatch } from 'react-redux';

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
    <form onSubmit={handleSubmit}>
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
      <Button type="submit">LogIn</Button>
    </form>
  );
};
export default Login;
