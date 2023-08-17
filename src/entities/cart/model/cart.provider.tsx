'use client';

import { FC, useState } from 'react';
import { CartContext, defaultCartContext } from './cart.context';
import { useCartActions } from '../lib/hooks';

export const CartProvider = (Component: FC) => {
  const Wrapper = () => {
    const [cartContext, setCartContext] = useState(defaultCartContext);

    const [
      orderAsteroid,
      removeAsteroidOrder,
      submitOrderAsteroids,
      getSavedAsteroidsOrder,
    ] = useCartActions(cartContext, setCartContext);

    return (
      <CartContext.Provider
        value={{
          ...cartContext,
          orderAsteroid,
          removeAsteroidOrder,
          submitOrderAsteroids,
          getSavedAsteroidsOrder,
        }}
      >
        <Component />
      </CartContext.Provider>
    );
  };

  return Wrapper;
};
