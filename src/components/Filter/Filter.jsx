import style from './filter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from "redux/filterSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const handleChange = (evt) => {
        const { value } = evt.currentTarget;
        dispatch(setFilter(value));
    }

    return (
        <label className={style.label} > Find contacts by name
            <input className={style.input} type="text" name="filter" value={filter} onChange={evt => handleChange(evt)}/>
        </label>
    )
}

export default Filter;