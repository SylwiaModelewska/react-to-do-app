import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleClassFavorite } from '../../redux/store';

const Card = props => {

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(toggleClassFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button type="button" onClick={toggleFavorite} className={clsx(styles.favButton, props.isFavorite && styles.active)}>
        <span className="fa fa-star-o" />
      </button>
    </li>
  );
};

export default Card;