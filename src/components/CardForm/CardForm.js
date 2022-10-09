import { useState } from 'react';
import styles from './CardForm.module.scss';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = props => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
      e.preventDefault();
      dispatch(addCard({ columnId: props.columnId, title, isFavorite: false }));
      setTitle('');
  }

return (
  <form onSubmit={handleSubmit} className={styles.cardForm}>
    <TextInput value={title} onChange={e => setTitle(e.target.value)} /> 
    <Button>Add card</Button>
  </form>
);
};

export default CardForm;