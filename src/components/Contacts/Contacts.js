import ContactList from '../ContactList';
import Filter from '../Filter';
import ContactForm from '../ContactForm';

function Contacts() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
export default Contacts;
