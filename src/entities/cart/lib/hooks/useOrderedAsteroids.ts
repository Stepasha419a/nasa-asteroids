import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../model';
import { Asteroid } from '@/shared/api/interfaces';
import { asteroidService } from '@/shared/api/services';

export function useOrderedAsteroids() {
  const { asteroidIds, getSavedAsteroidsOrder } = useContext(CartContext);
  const [asteroids, setAsteroids] = useState<Asteroid[]>();

  useEffect(() => {
    getSavedAsteroidsOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fetchAsteroids() {
    asteroidService
      .getAsteroidsByIds(asteroidIds)
      .then((data) => setAsteroids(data));
  }

  useEffect(() => {
    if (asteroidIds.length) {
      fetchAsteroids();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asteroidIds.length]);

  return asteroids;
}
