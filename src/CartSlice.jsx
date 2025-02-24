import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    
    },
    removeItem: (state, action) => {state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {

    
    },
  
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
