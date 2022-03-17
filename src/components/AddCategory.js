import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {

  const [inputValue, setInputValue] = useState('');

  const handleImputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if (inputValue.trim().length > 2) {

      setCategorias(cat => [inputValue, ...cat]);
      setInputValue('');
    }

    // console.log('Submit Hecho');

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handleImputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired
}
