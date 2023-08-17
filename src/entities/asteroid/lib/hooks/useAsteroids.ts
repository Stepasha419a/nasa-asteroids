import { useState, useRef, useEffect } from 'react';
import type { Asteroid } from '@/shared/api/interfaces';
import { asteroidService } from '@/shared/api/services';
import { GetAsteroidsResponse } from '@/shared/api/services/Asteroid/Asteroid.service';

type UseAsteroidsReturn = [Asteroid[], () => void];

export function useAsteroids(): UseAsteroidsReturn {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);

  const nextLink = useRef<string | null>(null);

  function fetchAsteroids() {
    asteroidService
      .getAsteroids(nextLink.current)
      .then((data) => receiveResponse(data));
  }

  function receiveResponse(data: GetAsteroidsResponse) {
    setAsteroids((prev) => [...prev, ...data.asteroids]);
    nextLink.current = data.nextLink;
  }

  useEffect(() => {
    fetchAsteroids();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [asteroids, fetchAsteroids];
}
