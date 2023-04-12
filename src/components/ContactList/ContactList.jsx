import style from './contactList.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const { items } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilter = () => {
    return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <ul className={style.list}>
      {handleFilter().map(contact => <ContactItem key={contact.id} contact={contact}/>)}
    </ul>
  );
};

export default ContactList;
