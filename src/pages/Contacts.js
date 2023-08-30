import { Box } from '@chakra-ui/react';

import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  return (
    <Box
      w="400px"
      marginTop="20px"
      padding="8px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      borderWidth="10px"
    >
      <ContactForm />

      <Filter />

      <ContactList />
    </Box>
  );
};
export default Contacts;
