import style from './filter.module.scss';
import PropTypes from 'prop-types';

const Filter = ({filter, handleChange}) => {
    return (
        <label className={style.label} > Find contacts by name
            <input className={style.input} type="text" name="filter" value={filter} onChange={evt => handleChange(evt)}/>
        </label>
    )
}

Filter.propTypes = {
    handleChange: PropTypes.func,
    filter: PropTypes.string,
}

export default Filter;