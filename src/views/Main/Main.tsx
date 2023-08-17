'use client';

import { Cart } from '@/features/cart';
import styles from './Main.module.css';
import { withContextProviders } from '@/application/lib';
import { OrderAsteroid } from '@/features/asteroid';

const Main = () => {
  return (
    <div>
      <div className={styles.rights}>
        <h1 className={styles.title}>ARMAGEDDON 2023</h1>
        <div className={styles.text}>
          ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.
        </div>
      </div>
      <div className={styles.content}>
        <OrderAsteroid />
        <Cart />
      </div>
    </div>
  );
};

export default withContextProviders(Main);
