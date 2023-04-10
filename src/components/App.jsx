import style from './app.module.scss';

import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";


export const App = () => {

  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}