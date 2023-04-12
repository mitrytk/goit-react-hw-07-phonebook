import style from './contactItem.module.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { RotatingLines } from 'react-loader-spinner';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getContacts);
  const isLoadingItem = isLoading === `deleteContact/id-${contact.id}`;

  const delContact = evt => {
    const id = evt.target.id;
    dispatch(deleteContact(id));
  };

  return (
    <li key={contact.id} className={style.item}>
      <div className={style.itemLoader}>
        <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible={isLoadingItem}
        />
      </div>
      <p className={style.contactName}>{contact.name}: </p>
      <p className={style.contactNumber}>{contact.phone}</p>
      {isLoadingItem || (
        <button
          className={style.button}
          id={contact.id}
          type="button"
          onClick={evt => delContact(evt)}
        >
          Delete
        </button>
      )}
    </li>
  );
};

ContactItem.propTypes = {
    contact: PropTypes.object,
}

export default ContactItem;
