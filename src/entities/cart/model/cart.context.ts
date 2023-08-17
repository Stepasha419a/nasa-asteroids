import { createContext } from 'react';

export interface CartContext {
  asteroidIds: string[];
  orderAsteroid: (asteroidId: string) => void;
  removeAsteroidOrder: (asteroidId: string) => void;
  submitOrderAsteroids: () => void;
  getSavedAsteroidsOrder: () => void;
}

export const defaultCartContext: CartContext = {
  asteroidIds: [],
  orderAsteroid: () => {},
  removeAsteroidOrder: () => {},
  submitOrderAsteroids: () => {},
  getSavedAsteroidsOrder: () => {},
};

export const CartContext = createContext(defaultCartContext);
