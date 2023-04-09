import style from './app.module.scss';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addContact, delContact } from "redux/contactsSlice";
import { setFilter } from "redux/filterSlice";

import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const handleSubmit = (state) => {
    const foundName = contacts.find(contact => contact.name === state.name);
    
    if (foundName) {
      alert(`${state.name} is already in contacts`)
      return;
    }

    dispatch(addContact(state))
  }

  const handleChange = (evt) => {
    const { value } = evt.currentTarget;
    dispatch(setFilter(value));
  }

  const deleteContact = (evt) => {
    const id = evt.currentTarget.id;
    dispatch(delContact(id))
  }

  const handleFilter = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit}/>

      <h2 className={style.title}>Contacts</h2>
      <Filter handleChange={handleChange} filter={filter}/>
      <ContactList onDelete={deleteContact} contacts={filter === '' ? contacts : handleFilter()}/>
    </div>
  );
}