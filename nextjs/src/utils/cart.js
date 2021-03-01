export const getCart = () => {
  return JSON.parse(localStorage.getItem('items')) || [];
}

export const setCart = (items) => {
  return localStorage.setItem('items', JSON.stringify(items));
}

// export const addItem = (item) => {
//   let items = getItems();
//   items.push({...item, quantity: 1});
//   localStorage.setItem('items', JSON.stringify(items));
// }

// export const editItem = (itemId, newQuantity) => {
//   let items = getItems();
//   localStorage.setItem('items', JSON.stringify(
//     items.map(item => item.id === itemId ? item : 
//       { ...item, quantity: newQuantity })
//   ));
// }

// export const removeItem = (itemId) => {
//   let items = getItems();
//   localStorage.setItem('items', JSON.stringify(
//     items.filter(item => item.id !== itemId)
//   ));
// }
