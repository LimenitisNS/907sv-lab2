import React, { useState } from 'react';

function Form({ pushArray }) {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    pushArray(value);
    setValue('');
  }

  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <input
        data-testid="input"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Добавить
      </button>
    </form>
  );
}

export default Form;
