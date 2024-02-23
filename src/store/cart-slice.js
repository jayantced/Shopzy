import { createSlice } from '@reduxjs/toolkit';

const storedCart = JSON.parse(localStorage.getItem('cart'));

const cartSlice = createSlice({
    name: 'cart',
    initialState: storedCart
        ? {
            items: storedCart.items,
            totalQuantity: storedCart.totalQuantity,
            changed: false,
        }
        : {
            items: [],
            totalQuantity: 0,
            changed: false,
        },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                    name: newItem.title,
                    image: newItem.image
                });
            } else {
                existingItem.quantity = existingItem.quantity + newItem.quantity;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            console.log(state.items)
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            console.log(state.items[0])
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

const cartLocalStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    if (action.type === 'cart/addItemToCart' || action.type === 'cart/removeItemFromCart') {
        const cartState = store.getState().cart;
        localStorage.setItem('cart', JSON.stringify(cartState));
    }

    return result;
};

export { cartLocalStorageMiddleware };

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice;