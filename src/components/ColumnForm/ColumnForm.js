import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
      e.preventDefault();
      dispatch(addColumn({ title, icon, listId: props.listId }));
      setTitle('');
      setIcon('');
  }

return (
      <form onSubmit={handleSubmit} className={styles.columnForm}>
          <label className={styles.label}>Title:</label> <TextInput value={title} onChange={e => setTitle(e.target.value)} /> 
          <label className={styles.label}>Icon:</label> <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
          <Button>Add column</Button>
      </form>
);
};

export default ColumnForm;