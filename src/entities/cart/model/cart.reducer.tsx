import { CartActions } from './cart.actions';
import { CartContext } from './cart.context';
import {
  CartPayloads,
  Order_Asteroid_Payload,
  Remove_Asteroid_Order_Payload,
} from './cart.payloads';

type Action<T, P> = { type: T; payload: P };

export function CartReducer(
  state: CartContext,
  action: Action<CartActions, CartPayloads>
): CartContext {
  switch (action.type) {
    case CartActions.ORDER_ASTEROID_ACTION:
      const addId = action.payload as Order_Asteroid_Payload;
      if (state.asteroidIds.includes(addId)) {
        return state;
      }
      return {
        ...state,
        asteroidIds: [...state.asteroidIds, addId],
      };
    case CartActions.REMOVE_ASTEROID_ORDER_ACTION:
      const removeId = action.payload as Remove_Asteroid_Order_Payload;
      if (state.asteroidIds.includes(removeId)) {
        return {
          ...state,
          asteroidIds: state.asteroidIds.filter(
            (asteroidId) => asteroidId !== removeId
          ),
        };
      }

      return state;
    case CartActions.SUBMIT_ORDER_ASTEROIDS_ACTION:
      if (!state.asteroidIds.length) {
        return state;
      }

      const JSONAsteroidIds = JSON.stringify(state.asteroidIds);
      localStorage.setItem('ordered-asteroids', JSONAsteroidIds);

      return state;
    case CartActions.GET_SAVED_ASTEROIDS_ORDER_ACTION:
      const SavedAsteroidIds = localStorage.getItem('ordered-asteroids');

      const asteroidIds = JSON.parse(SavedAsteroidIds!);

      if (!asteroidIds?.length) {
        return state;
      }

      return { ...state, asteroidIds };
    default:
      return state;
  }
}
