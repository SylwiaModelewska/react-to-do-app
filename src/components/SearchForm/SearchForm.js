import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const [searchString, setSearchString] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchString(''));
  }, []);

  const handleSubmit = e => {
      e.preventDefault();
      dispatch(updateSearchString(searchString));
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
        <TextInput placeholder="Search…" value={searchString} onChange={e => setSearchString(e.target.value)}/>
        <Button>
          <span className="fa fa-search" />
        </Button>
    </form>
  );
};

export default SearchForm;