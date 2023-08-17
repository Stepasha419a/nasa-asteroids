'use client';

import { FC } from 'react';
import { useCurrentAsteroid } from '../../lib';
import Image from 'next/image';
import styles from './CurrentAsteroid.module.css';
import { CloseApproachData } from '@/shared/api/interfaces';

interface CurrentAsteroidProps {
  asteroidId: string;
}

export const CurrentAsteroid: FC<CurrentAsteroidProps> = ({ asteroidId }) => {
  const asteroid = useCurrentAsteroid(asteroidId);

  if (!asteroid) {
    return <div>loading</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.asteroid}>
        <Image
          src="/images/big-asteroid.png"
          width={300}
          height={300}
          alt="asteroid"
          className={styles.image}
        />
        <div className={styles.property}>
          <span className={styles.name}>Имя</span> {asteroid.name}
        </div>
        <div className={styles.property}>
          <span className={styles.name}>Диаметр</span> Ø
          <span className={styles.value}>
            {Math.round(
              (asteroid.estimated_diameter.meters.estimated_diameter_max +
                asteroid.estimated_diameter.meters.estimated_diameter_min) /
                2
            )}
          </span>
          м
        </div>
        {asteroid.is_potentially_hazardous_asteroid && (
          <div className={styles.property}>⚠️ Опасен</div>
        )}
      </div>
      <table className={styles.dates}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Скорость</th>
            <th>Расстояние</th>
            <th>По орбите вокруг</th>
          </tr>
        </thead>
        <tbody>
          {asteroid.close_approach_data.map((date: CloseApproachData) => {
            return (
              <tr className={styles.date} key={date.close_approach_date}>
                <td>{date.close_approach_date_full}</td>
                <td>
                  <span className={styles.value}>
                    {Math.round(+date.relative_velocity.kilometers_per_hour)}
                  </span>
                  км/ч
                </td>
                <td>
                  <span className={styles.value}>
                    {Math.round(+date.miss_distance.kilometers)}
                  </span>
                  км
                </td>
                <td>{date.orbiting_body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
