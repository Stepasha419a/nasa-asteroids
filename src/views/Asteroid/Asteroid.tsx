import type { FC } from 'react';
import styles from './Asteroid.module.css';
import Image from 'next/image';
import { CurrentAsteroid } from '@/entities/asteroid/components';
import Link from 'next/link';

interface AsteroidProps {
  asteroidId: string;
}

export const Asteroid: FC<AsteroidProps> = ({ asteroidId }) => {
  return (
    <div>
      <div className={styles.rights}>
        <Link href={'/'} className={styles.title}>
          ARMAGEDDON 2023
        </Link>
        <div className={styles.text}>
          ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.
        </div>
      </div>
      <div className={styles.content}>
        <CurrentAsteroid asteroidId={asteroidId} />
      </div>
    </div>
  );
};
