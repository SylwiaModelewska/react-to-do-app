import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle.js';
import Card from '../Card/Card.js';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const Favorite = () => {

  const favCards = useSelector(getFavoriteCards);

  const showContent = () => {
    if(favCards.length !== 0){
      return (
        <article className={styles.column}>
        <ul className={styles.cards}>
          {favCards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />)}
        </ul>
        </article>
      );
    } else {
      return (
        <p className={styles.message}>There's no favorite cards</p>
      );
    }
  }

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      {showContent()}
    </div>
  );
};

export default Favorite;