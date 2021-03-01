import React from 'react';

const ItemsGrid = ({items}) => {
  return (
    <>
      {
        items.map((item) => (
          <Item key={item.key} item={item} />))
      }
    </>
  );
};

const Item = ({item}) => {
  return (
    <div>{item.name}</div>
  );
};

export default ItemsGrid;
