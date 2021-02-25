import React from 'react';

function Item({ value, index, remove }) {
  return (
    <li>
      <span data-testid="item">{value}</span>
      <button data-testid="delete" onClick={() => remove(index)}>
        X
      </button>
    </li>
  );
}

export default Item;
