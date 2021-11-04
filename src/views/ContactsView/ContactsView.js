import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import Contacts from '../../components/Contacts';
// import ContactForm from '../../components/ContactForm';
// import ContactList from '../../components/ContactList';
// import TodoEditor from '../components/TodoEditor';
// import Filter from '../../components/Filter';
// import Stats from '../components/Stats';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { getLoading } from '../../redux/contacts/contacts-selectors';
import { contactsOperations } from '../../redux/contacts';
// import s from './ContactsView.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();
  // const isLoadingContacts = useSelector(getLoading);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <Contacts />
    </Container>
  );
}
