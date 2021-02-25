import React, { useState } from 'react';
import Item from '../Item/Item';
import Form from '../Form/Form';

function List() {
  const [list, setList] = useState([]);

  function pushArray(value) {
    setList([...list, value]);
  }

  function remove(index) {
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <>
      <Form pushArray={pushArray} />
      <div>
        {list.map((item, index) => (
          <Item value={item} index={index} key={index} remove={remove} />
        ))}
      </div>
    </>
  );
}

export default List;
