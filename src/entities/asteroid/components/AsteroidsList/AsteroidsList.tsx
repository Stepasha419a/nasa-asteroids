'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import { Asteroid as AsteroidInterface } from '@/shared/api/interfaces';
import { Asteroid } from './Asteroid/Asteroid';
import { getAsteroidData } from '../../lib';
import styles from './AsteroidsList.module.css';

interface AsteroidsListProps {
  asteroids: AsteroidInterface[] | undefined;
  orderedAsteroidIds?: string[];
  isSettableDistance?: boolean;
  handleOrderAsteroid?: (asteroidId: string) => void;
}

export const AsteroidsList: FC<AsteroidsListProps> = ({
  asteroids,
  orderedAsteroidIds,
  isSettableDistance,
  handleOrderAsteroid,
}) => {
  const [isKmDistance, setIsKmDistance] = useState(false);

  const isLoading = !asteroids?.length;

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div>
      {isSettableDistance && (
        <div className={styles.distance}>
          <button
            className={classNames(styles.btn, isKmDistance && styles.active)}
            onClick={() => setIsKmDistance(true)}
          >
            в километрах
          </button>
          <span> | </span>
          <button
            className={classNames(styles.btn, !isKmDistance && styles.active)}
            onClick={() => setIsKmDistance(false)}
          >
            в лунных орбитах
          </button>
        </div>
      )}
      <div className={styles.asteroids}>
        {asteroids.map((asteroid) => {
          return (
            <Asteroid
              {...getAsteroidData(asteroid, isKmDistance, orderedAsteroidIds)}
              handleOrderAsteroid={handleOrderAsteroid}
              key={asteroid.id}
            />
          );
        })}
      </div>
    </div>
  );
};
