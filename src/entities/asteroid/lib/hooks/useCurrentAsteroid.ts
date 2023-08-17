import { Asteroid } from '@/shared/api/interfaces';
import { asteroidService } from '@/shared/api/services';
import { useEffect, useState } from 'react';

export function useCurrentAsteroid(asteroidId: string) {
  const [asteroid, setAsteroid] = useState<Asteroid | null>(null);

  function fetchAsteroids() {
    asteroidService.getAsteroid(asteroidId).then((data) => setAsteroid(data));
  }

  useEffect(() => {
    fetchAsteroids();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return asteroid;
}
