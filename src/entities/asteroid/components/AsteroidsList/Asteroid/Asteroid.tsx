import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './Asteroid.module.css';
import Link from 'next/link';

interface AsteroidProps {
  id: string;
  name: string;
  date: string;
  distance: string;
  diameter: number;
  isBig: boolean;
  imageUrl: string;
  isHazardous: boolean;
  isOrdered?: boolean;
  handleOrderAsteroid?: (asteroidId: string) => void;
}

export const Asteroid: FC<AsteroidProps> = ({
  id,
  name,
  date,
  distance,
  diameter,
  isBig,
  imageUrl,
  isHazardous,
  isOrdered,
  handleOrderAsteroid,
}) => {
  return (
    <div className={styles.asteroid}>
      <h3 className={styles.date}>{date}</h3>
      <div className={styles.description}>
        <div className={styles.distance}>
          {distance}
          <div className={styles.arrow}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
          </div>
        </div>
        <Image
          src={`/images/${imageUrl}`}
          width={24}
          height={24}
          alt="asteroid"
          className={classNames(styles.img, isBig && styles.big)}
        />
        <div className={styles.properties}>
          <Link href={`/${id}`} className={styles.name}>
            {name}
          </Link>
          <div className={styles.diameter}>
            Ø<span className={styles.value}>{diameter}</span>м
          </div>
        </div>
      </div>
      <div className={styles.flex}>
        {handleOrderAsteroid &&
          (isOrdered ? (
            <button
              onClick={() => handleOrderAsteroid(id)}
              className={classNames(styles.order, styles.ordered)}
            >
              в корзине
            </button>
          ) : (
            <button
              onClick={() => handleOrderAsteroid(id)}
              className={styles.order}
            >
              заказать
            </button>
          ))}
        {isHazardous && <div className={styles.warning}>⚠️ Опасен</div>}
      </div>
    </div>
  );
};
