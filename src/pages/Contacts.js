import { Box, Flex, Text, Container } from '@chakra-ui/react';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/contacts/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <Container
        pl="10px"
        pr="10px"
        className="containerSL"
        maxW={['400px', '450px', '768px', '900px', '1440px']}
      >
        <Flex bg="gray.100" justify="center" alignItems="flex-start" p={5}>
          <Box bg="white" p="10px" mt={['0px', '50px']} borderRadius="10px">
            <Text as="h1" color="black" fontSize="20" mb={5} textAlign="center">
              Add your contact
            </Text>

            <ContactForm />

            <Filter />
            <Text as="h1" color="black" fontSize="20" mb={5} textAlign="center">
              Your contacts:
            </Text>
            <ContactList />
          </Box>
        </Flex>
      </Container>
    </>
  );
};
export default Contacts;
