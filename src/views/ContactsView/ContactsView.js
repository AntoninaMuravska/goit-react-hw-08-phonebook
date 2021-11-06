import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import Contacts from '../../components/Contacts';
import { contactsOperations } from '../../redux/contacts';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <Contacts />
    </Container>
  );
}
