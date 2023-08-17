'use client';

import { withContextProviders } from '@/application/lib';
import { OrderedAsteroidsList } from '@/features/asteroid';
import styles from './Cart.module.css';
import Link from 'next/link';

const Cart = () => {
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
        <OrderedAsteroidsList />
      </div>
    </div>
  );
};

export default withContextProviders(Cart);
