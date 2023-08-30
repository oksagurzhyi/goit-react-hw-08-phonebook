import { useDispatch } from 'react-redux';

import { Button, Input } from '@chakra-ui/react';
import { createUser } from 'redux/auth/operationsAuth';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form);
    dispatch(
      createUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      style={{
        padding: '10px',
      }}
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
      <Button type="submit">Register</Button>
    </form>
  );
};
export default RegisterForm;
