import style from './contactForm.module.scss';
import { useState } from "react";
import PropTypes from 'prop-types';

const ContactForm = ({onSubmit}) => {
    const [ name, setName ] = useState('');
    const [ number, setNumber] = useState('');

    const handleChange = (evt) => {
        switch(evt.currentTarget.name) {
            case 'name':
                setName(evt.currentTarget.value);
                break;
            
            case 'number': 
                setNumber(evt.currentTarget.value);
                break;

            default:
                return;
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        onSubmit({
            name,
            number,
        });

        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
        <form className={style.form} onSubmit={evt => handleSubmit(evt)}>
            <label className={style.label}> Name
                <input
                className={style.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={evt => handleChange(evt)}
                />
            </label>
            
            <label className={style.label}> Number 
                <input
                className={style.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={evt => handleChange(evt)}
                />
            </label> 
            <button className={style.submit} type="submit">Add contact</button>
        </form>
    )
} 

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default ContactForm;