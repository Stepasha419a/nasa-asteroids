import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { CartContext } from '@/entities/cart/model';
import { toCorrectNumeralForm } from '@/shared/lib/helpers';
import styles from './Cart.module.css';

export const Cart = () => {
  const router = useRouter();
  const { asteroidIds, submitOrderAsteroids } = useContext(CartContext);

  const asteroidsForm = toCorrectNumeralForm(asteroidIds.length, [
    'астероид',
    'астероида',
    'астероидов',
  ]);

  const handleSubmitOrder = () => {
    submitOrderAsteroids();
    router.push('/cart');
  };

  return (
    <div className={styles.cart}>
      <h3 className={styles.title}>Корзина</h3>
      <div className={styles.count}>
        <span className={styles.value}>{asteroidIds.length}</span>
        {asteroidsForm}
      </div>
      <button onClick={handleSubmitOrder} className={styles.btn}>
        Отправить
      </button>
    </div>
  );
};
