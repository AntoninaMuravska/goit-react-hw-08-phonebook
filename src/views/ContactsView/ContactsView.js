import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
// import TodoEditor from '../components/TodoEditor';
import Filter from '../../components/Filter';
// import Stats from '../components/Stats';
import Modal from '../../components/Modal';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { todosOperations, todosSelectors } from '../redux/todos';
import s from './ContactsView.module.css';

export default function TodosView(params) {
  // const dispatch = useDispatch();
  // const isLoadingTodos = useSelector(todosSelectors.getLoading);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  // useEffect(() => dispatch(todosOperations.fetchTodos()), [dispatch]);

  return (
    <Container>
      <div className={s.barStyles}>
        <ContactForm />
        <Filter />
        {/* <Stats />
        <IconButton onClick={toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton> */}

        {/* {isLoadingContacts && <h1>Загружаем...</h1>} */}
      </div>

      <ContactList />

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          {/* <TodoEditor onSave={toggleModal} /> */}
        </Modal>
      )}
    </Container>
  );
}
