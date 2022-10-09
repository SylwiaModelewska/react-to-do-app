import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleClassFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(toggleClassFavorite(props.id));
  };

  const removeClick = () => {
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button type="button" onClick={toggleFavorite} className={clsx(styles.iconButton, props.isFavorite && styles.active)}>
          <span className="fa fa-star-o" />
        </button>
        <button type="button" onClick={removeClick} className={styles.iconButton}>
          <span className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
};

export default Card;