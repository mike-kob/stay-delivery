export const getCart = () => {
  return JSON.parse(localStorage.getItem('items')) || [];
};

export const setCart = (items) => {
  return localStorage.setItem('items', JSON.stringify(items));
};
