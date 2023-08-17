import { CartProvider } from '@/entities/cart/model';
import { compose } from '@/shared/lib/helpers/compose';

export const withContextProviders = compose(CartProvider);
