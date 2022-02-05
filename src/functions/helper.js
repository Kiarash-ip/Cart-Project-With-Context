const shorten = (title) => {
  const titleArray = title.split(" ");
  return `${titleArray[0]} ${titleArray[1]}`;
};

const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((product) => product.id === id);
  if (index === -1) {
    return false;
  } else return state.selectedItems[index].quantity;
};

export { shorten, isInCart, quantityCount };
