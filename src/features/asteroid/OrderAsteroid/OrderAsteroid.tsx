import { useContext } from 'react';
import { CartContext } from '@/entities/cart/model';
import { AsteroidsList } from '@/entities/asteroid/components';
import { useAsteroids, useScrollAsteroids } from '@/entities/asteroid/lib';
import styles from './OrderAsteroid.module.css';

export const OrderAsteroid = () => {
  const { orderAsteroid, removeAsteroidOrder, asteroidIds } =
    useContext(CartContext);

  const handleAsteroidClick = (asteroidId: string) => {
    console.log(asteroidIds);
    if (asteroidIds.includes(asteroidId)) {
      removeAsteroidOrder(asteroidId);
    } else {
      orderAsteroid(asteroidId);
    }
  };

  const [asteroids, fetchAsteroids] = useAsteroids();

  const isLoading = !asteroids?.length;

  useScrollAsteroids(fetchAsteroids, isLoading);

  return (
    <div>
      <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
      <AsteroidsList
        asteroids={asteroids}
        orderedAsteroidIds={asteroidIds}
        isSettableDistance
        handleOrderAsteroid={handleAsteroidClick}
      />
    </div>
  );
};
