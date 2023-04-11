import style from './contactList.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts, deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const { items } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const delContact = evt => {
    const id = evt.target.id;
    dispatch(deleteContact(id));
  };

  const handleFilter = () => {
    return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <ul className={style.list}>
      {handleFilter().map(contact => {
        return (
          <li key={contact.id} className={style.item}>
            <p className={style.contactName}>{contact.name}: </p>
            <p className={style.contactNumber}>{contact.phone}</p>
            <button
              className={style.button}
              id={contact.id}
              type="button"
              onClick={evt => delContact(evt)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
