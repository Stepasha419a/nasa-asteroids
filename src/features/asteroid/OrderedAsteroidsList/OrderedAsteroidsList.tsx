import { AsteroidsList } from '@/entities/asteroid/components';
import { useOrderedAsteroids } from '@/entities/cart/lib';
import styles from './OrderedAsteroidsList.module.css';

export const OrderedAsteroidsList = () => {
  const asteroids = useOrderedAsteroids();

  return (
    <div>
      <h2 className={styles.title}>Заказ отправлен!</h2>
      <AsteroidsList asteroids={asteroids} />
    </div>
  );
};
