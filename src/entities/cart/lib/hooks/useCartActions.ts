import { Dispatch, SetStateAction } from 'react';
import { CartActions, CartContext } from '../../model';
import { CartReducer } from '../../model/cart.reducer';

export function useCartActions(
  context: CartContext,
  setContext: Dispatch<SetStateAction<CartContext>>
) {
  function orderAsteroid(asteroidId: string) {
    setContext(
      CartReducer(context, {
        type: CartActions.ORDER_ASTEROID_ACTION,
        payload: asteroidId,
      })
    );
  }

  function removeAsteroidOrder(asteroidId: string) {
    setContext(
      CartReducer(context, {
        type: CartActions.REMOVE_ASTEROID_ORDER_ACTION,
        payload: asteroidId,
      })
    );
  }

  function submitOrderAsteroids() {
    setContext(
      CartReducer(context, {
        type: CartActions.SUBMIT_ORDER_ASTEROIDS_ACTION,
        payload: undefined,
      })
    );
  }

  function getSavedAsteroidsOrder() {
    setContext(
      CartReducer(context, {
        type: CartActions.GET_SAVED_ASTEROIDS_ORDER_ACTION,
        payload: undefined,
      })
    );
  }

  return [
    orderAsteroid,
    removeAsteroidOrder,
    submitOrderAsteroids,
    getSavedAsteroidsOrder,
  ];
}
