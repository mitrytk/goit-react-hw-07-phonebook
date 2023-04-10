import style from './contactList.module.scss';

import { useSelector, useDispatch } from 'react-redux';

import { delContact } from 'redux/contactsSlice';

const ContactList = () => {

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const deleteContact = evt => {
    const id = evt.currentTarget.id;
    dispatch(delContact(id));
  };

  const handleFilter = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <ul className={style.list}>
      {handleFilter().map(contact => {
        return (
          <li key={contact.id} className={style.item}>
            <p className={style.contactName}>{contact.name}: </p>
            <p className={style.contactNumber}>{contact.number}</p>
            <button
              className={style.button}
              id={contact.id}
              type="button"
              onClick={evt => deleteContact(evt)}
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
