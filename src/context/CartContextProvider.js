import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => (total += product.quantity),
    0
  );
  const total = items
    .reduce((total, product) => (total += product.quantity * product.price), 0)
    .toFixed(2);

  return { itemsCounter, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (
        !state.selectedItems.find((product) => product.id === action.payload.id)
      ) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };

    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (product) => product.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (product) => product.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
