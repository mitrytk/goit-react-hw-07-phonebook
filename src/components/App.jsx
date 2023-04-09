import { useState, useEffect} from "react";
import { nanoid } from 'nanoid';
import style from './app.module.scss';

import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts) )
  }, [contacts])

  const handleSubmit = (state) => {
    const foundName = contacts.find(contact => contact.name === state.name);
    
    if (foundName) {
      alert(`${state.name} is already in contacts`)
      return;
    }

    setContacts(prev => [...prev, {id: nanoid(4), name: state.name, number: state.number}]);
  }

  const handleChange = (evt) => {
    const { value } = evt.currentTarget;
    setFilter(value);
  }

  const deleteContact = (evt) => {
    const id = evt.currentTarget.id;
    setContacts(prev => prev.filter(contact => contact.id !== id))
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